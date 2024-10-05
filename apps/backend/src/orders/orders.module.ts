import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersPrisma } from './orders.prisma';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [OrdersController],
  providers: [OrdersPrisma],
})
export class OrdersModule {}
