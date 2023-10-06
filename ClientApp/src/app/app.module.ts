//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//COMPONENTS ARE LOCATED HERE
import { AppComponent } from './app.component';
import { PageSwapperComponent } from './page-swapper/page-swapper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsCardsComponent } from './items-cards/items-cards.component';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { SignInComponent } from './user-admission/sign-in/sign-in.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { LoginComponent } from './user-admission/login/login.component';
// Services
import { SendEmailComponent } from './send-email/send-email.component';
import { CookieService } from 'ngx-cookie-service';
import { AddItemToFavoriteComponent } from './items-cards/add-item-to-favorite/add-item-to-favorite.component';
import { ItemCardComponent } from './items-cards/item-card/item-card.component';
import { AddItemToCartComponent } from './items-cards/item-card/add-item-to-cart/add-item-to-cart.component';
import { MainItemsLayoutComponent } from './main-items-layout/main-items-layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsCardsComponent,
    PageSwapperComponent,
    FavoriteItemsComponent,
    SignInComponent,
    UserAdmissionComponent,
    LoginComponent,
    SendEmailComponent,
    ShoppingCartComponent,
    AddItemToFavoriteComponent,
    ItemCardComponent,
    AddItemToCartComponent,
    MainItemsLayoutComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
