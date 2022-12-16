import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  heart: number = 0;
  constructor() {}
  getLikesNumber() {
    this.heart++;
    return (
      localStorage.setItem('heart', JSON.stringify(this.heart)),
      console.log(localStorage.getItem('heart'))
    );
  }
}
