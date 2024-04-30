import { BaseEntity } from './base.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';

export class OrderItem extends BaseEntity {
  product: Product;
  order: Order;
  quantity: number;
}
