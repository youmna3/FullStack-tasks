import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
})
export class HomeMainComponent {
  @Input() addtoFav() {
    this.storageService.getLikesNumber();
  }
  faHeart = faHeart;
  constructor(private storageService: StorageService) {}
  // isDisabled: boolean = false;
  handelClick() {
    alert('added to favorites');
  }
}
