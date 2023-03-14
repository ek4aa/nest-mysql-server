import * as env from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

env.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const logger: Logger = new Logger('main.ts');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(PORT, () => {
    logger.log(
      `Service has been started: http://wwww.localhost:${PORT}`,
    );
  });
}
bootstrap();
