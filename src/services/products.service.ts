import { Product } from '../entities/product.entity';
import { NotImplementedError } from '../exceptions/not-implemented.error';

export class ProductsService {
  constructor(private products: Product[]) {}

  createProduct(product: Product): Product {
    throw new NotImplementedError();
  }

  findMany(filter: Partial<Product>): Product[] {
    throw new NotImplementedError();
  }
}
