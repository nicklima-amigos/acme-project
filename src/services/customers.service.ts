import { Customer } from '../entities/customer.entity';
import { NotImplementedError } from '../exceptions/not-implemented.error';

export class CustomerService {
  constructor(private customer: Customer[]) {}

  createCustomer(customer: Customer): Customer {
    throw new NotImplementedError();
  }

  authenticate(name: string, phoneNumber: string, password: string) {
    throw new NotImplementedError();
  }
}
