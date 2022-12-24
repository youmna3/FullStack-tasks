import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  products: Product[] = [];
  login: any = '';
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {
    this.cartLines = storageService.getCartLines();
    this.login = authService.getLoginData();
  }

  cartLines: CartLine[] = [];

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
  checkOutForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    mobile_number: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', [Validators.required]),
  });
  getOrderDetails() {
    let details = [];
    for (let i = 0; i < this.cartLines.length; i++) {
      details.push({
        product_id: this.cartLines[i].product._id,
        price: this.cartLines[i].product.price,
        qty: this.cartLines[i].quantity,
      });
    }
    return details;
  }

  orderData() {
    let info = {
      shipping_info: this.checkOutForm.value,
      sub_total_price: this.getSubTotal(),
      shipping: this.getShipping(),
      total_price: this.getTotal(),
      user_id: this.login._id,
      order_details: this.getOrderDetails(),
      order_date: new Date(),
      _id: this.authService.getLoginData(),
    };

    return info;
  }
  postOrder() {
    if (this.checkOutForm.valid) {
      this.authService.postData(this.orderData()).subscribe({
        next: (data: any) => {
          alert('order added successfully');
        },
        error: (any) => {
          alert('error please sign in again');
        },
      });
    }
  }
}
