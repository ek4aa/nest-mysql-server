import { DataSourceOptions } from 'typeorm';
import { Todo } from 'src/todo/todo.entity';
// import { join } from 'path';

const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nesttest',
  entities: [Todo],
  // entities: [join(__dirname, '..\\**', '*.entity.{ts,js}')],
  synchronize: true,
};

export default config;
