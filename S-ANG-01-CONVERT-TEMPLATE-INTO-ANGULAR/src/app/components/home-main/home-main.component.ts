import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
})
export class HomeMainComponent {
  faHeart = faHeart;
  isDisabled: boolean = false;
  handelClick() {
    alert('added to favorites');
  }
}
