import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainItemsLayoutComponent } from './main-items-layout/main-items-layout.component';
import { FavouriteItemsComponent } from './favourite-items/favourite-items.component';
import { UserAdmissionComponent } from './user-admission/user-admission.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'items', component: MainItemsLayoutComponent},
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'favourite-items', component: FavouriteItemsComponent },
  { path: 'signin', component: UserAdmissionComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: UserAdmissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
