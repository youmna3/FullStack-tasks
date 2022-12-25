import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  //products: Product[] = [];
  login: any = '';
  constructor(
    public storageService: StorageService,
    public authService: AuthService
  ) {
    this.cartLines = storageService.getCartLines();
  }

  cartLines: CartLine[] = [];
  checkOutForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile_number: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', [Validators.required]),
  });

  placeOrder() {
    let info = JSON.stringify({
      subTotal: this.getSubTotal(),
      shipping: this.getShipping(),
      total_price: this.getTotal(),
      user_id: this.authService.getId(),
      order_date: new Date(),
      order_details: [JSON.parse(localStorage.getItem('products') || '')],
      shipping_info: this.checkOutForm.value,
    });
    if (this.checkOutForm.valid) {
      console.log(this.checkOutForm.valid);
      this.authService.postData(info).subscribe((data: any) => {
        console.log(data);
      });
    }
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
}
