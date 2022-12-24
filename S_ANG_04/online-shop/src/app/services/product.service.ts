import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Product[] = [];
  products: Product[] = [];
  //loginData: any;

  constructor(private httpClient: HttpClient) {
    //this.products = JSON.parse(localStorage.getItem('products') || '');
    //this.loginData = JSON.parse(localStorage.getItem('loginData') || '');
  }

  getFeaturedProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products`);
  }

  getRecentProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }

  addProduct(product: Product): void {
    this.cartProducts.push(product);
  }

  getProductById(id: string) {
    return this.httpClient.get(`${environment.apiUrl}products/${id}`);
  }

  getProductByCategoryId(id: string) {
    return this.httpClient.get(
      `${environment.apiUrl}products/getByCategoryId/${id}`
    );
  }
}
