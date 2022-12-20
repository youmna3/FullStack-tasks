import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CartLine } from './cartline';
@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartLines: CartLine[];
  constructor(
    //public cartLines: CartLine[],
    public storageService: StorageService
  ) {
    this.cartLines = storageService.getCartLines();
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }

  getSubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  getShipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }
  remove(i: number) {
    this.cartLines.splice(i, 1);
    //   this.storageService.save(this.cartLines);
  }
}
