import { ProductDto } from '../dto/product.dto';
import { ProductService } from './../service/product.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  create(@Body() product: ProductDto): Promise<ProductDto> {
    return this.productService.create(product);
  }

  @Get('/')
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }
}
