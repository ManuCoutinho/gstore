import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrdersModule } from './orders/orders.module';
import { DbModule } from './db/db.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [ProductsModule, OrdersModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
