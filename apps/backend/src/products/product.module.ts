import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DbModule } from 'src/db/db.module';
import { ProductPrisma } from './product.prisma';

@Module({
  controllers: [ProductsController],
  imports: [DbModule],
  providers: [ProductPrisma],
})
export class ProductsModule {}
