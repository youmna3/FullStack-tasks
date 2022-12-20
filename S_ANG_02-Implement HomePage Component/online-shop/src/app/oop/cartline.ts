import { Injectable } from '@angular/core';
import { Product } from 'src/app/oop/product';
import { StorageService } from '../services/storage.service';
@Injectable({
  providedIn: 'root',
})
export class CartLine {
  quantity: number;
  price: number;
  constructor(public product: Product, private storageService: StorageService) {
    this.product = product;
    this.quantity = 1;
    this.price = product.price;
  }

  getCartLineTotalPrice() {
    return this.price * this.quantity;
  }

  incQuantity = (q: number) => {
    this.quantity += q;
  };
  decQuantity = (q: number) => {
    if (this.quantity > q) this.quantity -= q;
  };
}
