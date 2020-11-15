/*
 * @Author: lifan
 * @Date: 2020-11-15 21:56:21
 * @LastEditTime: 2020-11-15 23:29:03
 * @LastEditors: lifan
 * @FilePath: /src/cats/cats.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  HttpCode,
  Header,
  Redirect,
  Param,
  Query,
} from '@nestjs/common';

@Controller({ path: 'cats' })
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect(): string {
    return 'This action returns all cats  11';
  }

  @Get('ab*cd')
  @Header('token', 'test')
  @HttpCode(404)
  findAll2(): string {
    return 'This action returns all cats **';
  }

  @Get('test/:id')
  findOne(@Param() params, @Query('id') id): string {
    console.log(id);
    return `This action returns a #${params.id} cat ${id}`;
  }
}
