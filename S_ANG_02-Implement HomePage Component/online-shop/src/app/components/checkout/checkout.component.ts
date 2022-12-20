import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
//import { CartLine } from 'src/app/interfaces/cart-line';
import { CartLine } from 'src/app/oop/cartline';
import { Cart } from 'src/app/oop/cart';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  //cart :Cart;
  constructor(private storageService: StorageService, public cart: Cart) {
    /*
    this.cart = cart.getSubTotal();
    this.cart = cart.getShipping();
    this.cart = cart.getTotal();
    */
  }
  cartLines: CartLine[] = [];
  // cart: Cart[] = [];
}
