import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainItemsLayoutComponent } from './main-items-layout/main-items-layout.component';
import { FavoriteItemsComponent } from './favorite-items/favorite-items.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'items', component: MainItemsLayoutComponent},
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'favorite-items', component: FavoriteItemsComponent },
  { path: 'signin', component: UserAdmissionComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: UserAdmissionComponent },
  { path: 'send-email', component: SendEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }