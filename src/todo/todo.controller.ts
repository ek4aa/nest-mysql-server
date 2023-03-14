import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id) {
    return this.todoService.getTodo(id);
  }

  @Post()
  addTodo(@Body() todo: Todo) {
    return this.todoService.addTodo(todo);
  }

  @Patch(':id')
  async editTodo(@Body() todo: Todo, @Param('id') id: number): Promise<Todo> {
    const todoEdited = await this.todoService.editTodo(id, todo);
    return todoEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.todoService.deleteTodo(id);
  }
}
