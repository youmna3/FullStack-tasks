import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {
  @Input() cartLines: CartLine[] = [];
  @Output() limitAlert = new EventEmitter<string>();
  constructor(private storageService: StorageService) {}
  incQuantity(i: number) {
    this.cartLines[i].quantity += 1;
    this.storageService.save(this.cartLines);
    /*
    if (this.cartLines[i].quantity > 10) {
      this.limitAlert.emit("You've exceeded the limit");
    }
    */
  }
  decQuantity(i: number) {
    if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
    if (this.cartLines[i].quantity < 2) {
      this.limitAlert.emit('Please increase your value');
    }
    this.storageService.save(this.cartLines);
  }
  remove(i: number) {
    this.cartLines.splice(i, 1);
    this.storageService.save(this.cartLines);
  }
}
