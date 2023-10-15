//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//COMPONENTS ARE LOCATED HERE
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsCardsComponent } from './items-cards/items-cards.component';
import { SignInComponent } from './user-admission/sign-in/sign-in.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { LoginComponent } from './user-admission/login/login.component';
// Services
import { CookieService } from 'ngx-cookie-service';
import { ItemCardComponent } from './items-cards/item-card/item-card.component';
import { AddItemToCartComponent } from './items-cards/item-card/add-item-to-cart/add-item-to-cart.component';
import { MainItemsLayoutComponent } from './main-items-layout/main-items-layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RemoveItemFromCartComponent } from './items-cards/item-card/remove-item-from-cart/remove-item-from-cart.component';
import { FavouriteItemsService } from './service/favourite-items.service';
import { AddItemToFavouriteComponent } from './items-cards/add-item-to-favourite/add-item-to-favourite.component';
import { ItemCounterComponent } from './items-cards/item-card/item-counter/item-counter.component';
import { PaginationComponent } from './items-cards/pagination/pagination.component';
import { FavouriteItemsComponent } from './favourite-items/favourite-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    UserAdmissionComponent,
    LoginComponent,
    ShoppingCartComponent,
    AddItemToCartComponent,
    MainItemsLayoutComponent,
    ItemsCardsComponent,
    ItemCardComponent,
    RemoveItemFromCartComponent,
    AddItemToFavouriteComponent,
    AddItemToCartComponent,
    ItemCounterComponent,
    PaginationComponent,
    FavouriteItemsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    CookieService,
    FavouriteItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
