/*
 * @Author: lifan
 * @Date: 2020-11-15 20:34:22
 * @LastEditTime: 2020-11-15 20:34:35
 * @LastEditors: lifan
 * @FilePath: /src/app.service.ts
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
