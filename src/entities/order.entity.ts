import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';

export class Order extends BaseEntity {
  customer: Customer;
}
