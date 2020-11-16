/*
 * @Author: lifan
 * @Date: 2020-11-16 22:10:53
 * @LastEditTime: 2020-11-16 22:10:53
 * @LastEditors: lifan
 * @FilePath: /src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
