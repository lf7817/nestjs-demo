/*
 * @Author: lifan
 * @Date: 2020-11-16 22:10:25
 * @LastEditTime: 2020-11-16 22:10:25
 * @LastEditors: lifan
 * @FilePath: /src/cats/cats.module.ts
 */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [],
})
export class CatsModule {}
