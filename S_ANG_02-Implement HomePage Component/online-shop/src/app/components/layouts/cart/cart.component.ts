import { Component, Output } from '@angular/core';
//import { CartLine } from 'src/app/interfaces/cart-line';
import { CartLine } from 'src/app/oop/cartline';
import { Cart } from 'src/app/oop/cart';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart;
  constructor(public storageService: StorageService) {
    // this.cartLines = storageService.getCartLines();
    this.cart = new Cart(storageService);
  }
  //cartLines: CartLine[] = [];
  /*
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

  showAlert(msg: string) {
    alert(msg);
  }
  */
}
function output() {
  throw new Error('Function not implemented.');
}
