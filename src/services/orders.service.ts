import { Order } from '../entities/order.entity';
import { NotImplementedError } from '../exceptions/not-implemented.error';

export class OrdersService {
  constructor(private orders: Order[]) {}

  createOrder(order: Order): Order {
    throw new NotImplementedError();
  }

  findMany(filter: Partial<Order>): Order[] {
    throw new NotImplementedError();
  }

  findOne(id: number): Order {
    throw new NotImplementedError();
  }

  cancelOrder(id: number): Order {
    throw new NotImplementedError();
  }
}
