import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductPrisma } from './product.prisma';
import { Product } from '@gstore/core';

@Controller('products')
export class ProductsController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  createProduct(@Body() product: Product) {
    return this.repo.save(product);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
