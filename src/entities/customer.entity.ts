import { BaseEntity } from './base.entity';

export class Customer extends BaseEntity {
  name: string;
  phoneNumber: string;
  address: string;
  cpf: string;
  password: string;
}
