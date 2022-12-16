import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-components/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [AppComponent, HomeMainComponent, FooterComponent, HeaderComponent, CartComponent, ServicesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
