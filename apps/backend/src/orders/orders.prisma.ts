import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider';
import { Order } from '@gstore/core';

@Injectable()
export class OrdersPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }
  async getById(id: number): Promise<Order> {
    const orders = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        delivery: true,
      },
    });
    return orders as any;
  }

  async create(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        totalAmount: order.totalAmount,
        paymentMethod: order.paymentMethod,
        delivery: { create: { ...order.delivery } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unityPrice: item.unityPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;
    await this.prisma.$transaction([
      this.prisma.orderItems.deleteMany({ where: { orderId: id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.deliveryOrder.delete({ where: { id: order.deliveryId } }),
    ]);
  }
}
