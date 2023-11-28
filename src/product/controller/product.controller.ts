import { Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post()
  create(): string {
    return 'This action adds a new product';
  }

  @Get()
  findAll(): string {
    return 'This action returns all product';
  }
}
