import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  create(product: ProductDto): Promise<ProductDto> {
    return this.productRepository.save(product);
  }

  findAll(): Promise<ProductDto[]> {
    return this.productRepository.find();
  }
}
