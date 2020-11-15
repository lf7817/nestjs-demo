/*
 * @Author: lifan
 * @Date: 2020-11-15 22:58:03
 * @LastEditTime: 2020-11-15 22:58:03
 * @LastEditors: lifan
 * @FilePath: /src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9229);
}
bootstrap();
