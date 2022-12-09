import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'S-ANG-01-CONVERT-TEMPLATE-INTO-ANGULAR';
  searchInput = 'search';
  faSearch = faSearch;
  faUser = faUser;
  faBars = faBars;
  faCartShopping = faCartShopping;
  faHeart = faHeart;
}
