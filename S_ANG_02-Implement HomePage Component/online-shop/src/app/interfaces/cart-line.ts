import { Product } from './product';

export interface CartLine {
  product: Product;
  quantity: number;
  price: number;
}
