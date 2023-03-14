import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './config/orm.config';

console.log(ormconfig);

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
