/*
 * @Author: lifan
 * @Date: 2020-11-15 21:56:21
 * @LastEditTime: 2020-11-16 22:04:30
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
  Body,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller({ path: 'cats' })
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
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

  @Get('findall3')
  async findAll3(): Promise<string[]> {
    return ['test'];
  }

  @Get('findall4')
  findAll4(): Observable<string[]> {
    return of(['demo']);
  }
}
