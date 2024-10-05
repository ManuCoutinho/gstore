import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersPrisma } from './orders.prisma';
import { Order } from '@gstore/core';

@Controller('orders')
export class OrdersController {
  constructor(private readonly repo: OrdersPrisma) {}

  @Get()
  async getOrder(): Promise<Order[]> {
    return this.repo.getAll();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.repo.getById(+id);
  }

  @Post()
  async createOrder(@Body() order: Order): Promise<void> {
    return this.repo.create(order);
  }

  @Delete(':id')
  async removeOrder(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
