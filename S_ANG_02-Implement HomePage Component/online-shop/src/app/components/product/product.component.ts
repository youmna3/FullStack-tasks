import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
//import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  // pass data from child to parent by @Input
  @Input() addtoFav() {
    this.productService.getHeartNumber();
  }

  constructor(private productService: ProductService) {}
  addProductToCart() {
    this.productService.addProduct(this.product);
  }
}
