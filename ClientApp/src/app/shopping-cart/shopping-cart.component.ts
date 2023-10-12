import { Component, OnInit } from '@angular/core';
import { IBeer } from '../IBeer';
import { ShoppingCartService } from '../service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public items: IBeer[] = [];
  constructor(private shoppingCartService: ShoppingCartService ) { 
  }

  async ngOnInit(): Promise<void> {
    this.items = await this.shoppingCartService.getItems();
   }

   calculateTotalPrice(): number{
      return this.shoppingCartService.totalPrice;
   }
}
