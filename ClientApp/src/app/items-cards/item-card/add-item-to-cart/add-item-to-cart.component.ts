import { Component, Input } from '@angular/core';
import { IBeer } from 'src/app/IBeer';
import { ShoppingCartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-add-item-to-cart',
  templateUrl: './add-item-to-cart.component.html',
  styleUrls: ['./add-item-to-cart.component.scss']
})
export class AddItemToCartComponent {
  @Input()
  item!: IBeer;

  private cartService: ShoppingCartService;
  constructor(cartService: ShoppingCartService) {
    this.cartService = cartService;
   }

  async addItemToCart(): Promise<void> {
    this.item.in_cart = true;
    this.item.in_cart_amount = 1;
    await this.cartService.addItem(this.item)
  }
}
