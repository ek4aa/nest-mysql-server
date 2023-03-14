import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private notesRepository: Repository<Todo>,
  ) {}

  // Creates a new todo (Add todo to array)
  async addTodo(todo: Todo) {
    this.notesRepository.save(todo);
  }

  // Returns a single todo with ID
  async getTodo(id: number): Promise<Todo> {
    return this.notesRepository.findOneBy({ id: id });
  }

  // Returns all todos available
  async getTodos(): Promise<Todo[]> {
    return await this.notesRepository.find();
  }

  // Deletes a todo by ID and add a new one (Update process)
  async editTodo(id: number, todo: Todo): Promise<Todo> {
    const editedTodo = await this.notesRepository.findOneBy({ id: id });
    if (!editedTodo) {
      throw new NotFoundException('Note is not found');
    }
    editedTodo.description = todo.description;
    editedTodo.title = todo.title;
    await editedTodo.save();
    return editedTodo;
  }

  // Deletes a todo from the array
  async deleteTodo(todoID: number): Promise<void> {
    await this.notesRepository.delete(todoID);
  }
}
