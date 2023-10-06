import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/cart.service';
import { IBeer } from '../IBeer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  private shoppingCartService: ShoppingCartService;
  public items: IBeer[] = [];
  constructor(shoppingCartService: ShoppingCartService) { 
    this.shoppingCartService = shoppingCartService
  }

  async ngOnInit(): Promise<void> {
    this.items = await this.shoppingCartService.getItems();
   }
}
