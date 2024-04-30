import { Customer } from '../entities/customer.entity';
import { NotImplementedError } from '../exceptions/not-implemented.error';

export class CustomerService {
  customers: Customer[];

  createCustomer(customer: Customer): Customer {
    throw new NotImplementedError();
  }

  authenticate(name: string, phoneNumber: string, password: string) {
    throw new NotImplementedError();
  }
}
