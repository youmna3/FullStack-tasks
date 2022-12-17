import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
//import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  // pass data from child to parent by @Input
  addtoFav() {
    this.storageService.getLikesNumber();
  }

  constructor(
    private productService: ProductService,
    private storageService: StorageService
  ) {}
  addProductToCart() {
    this.storageService.addProducts(this.product, 1);
  }
}
