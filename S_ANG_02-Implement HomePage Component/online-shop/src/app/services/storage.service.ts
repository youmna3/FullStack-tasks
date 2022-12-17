import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  heart: number = 0;
  constructor() {}
  // get data from localStorage
  getProductsFromLocalStorage(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  addProducts(product: Product, quantity: number) {
    //Add product to localstorage as flat products (array of products not cartLines)
    // save products in localStorage
    const products: Product[] = this.getProductsFromLocalStorage();
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartLines(): CartLine[] {
    const products: Product[] = this.getProductsFromLocalStorage();
    const cartLines: CartLine[] = [];
    //Convert Array of products into cart lines array and return it
    for (const p of products) {
      const i = cartLines.findIndex((x) => x.product._id === p._id);
      if (i >= 0) {
        cartLines[i].quantity += 1;
      } else {
        cartLines.push({
          price: p.price,
          product: p,
          quantity: 1,
        });
      }
    }
    return cartLines;
  }

  save(cartLines: CartLine[]) {
    const products: Product[] = [];
    cartLines.forEach((c) => {
      for (let i = 0; i < c.quantity; i++) {
        products.push(c.product);
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }
  getQuantity(): number {
    const products = this.getProductsFromLocalStorage();
    return products?.length || 0;
  }
  getLikesNumber() {
    this.heart++;
    return (
      localStorage.setItem('heart', JSON.stringify(this.heart)),
      localStorage.getItem('heart')
    );
  }

  getLikesQuan() {
    return localStorage.getItem('heart') || 0;
  }
}
