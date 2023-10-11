import { Component, OnInit } from '@angular/core';
import { IBeer } from '../IBeer';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  private shoppingCartService: BeerService;
  public items: IBeer[] = [];
  public totalPrice: number = 0;
  constructor(shoppingCartService: BeerService) { 
    this.shoppingCartService = shoppingCartService
  }

  async ngOnInit(): Promise<void> {
    this.items = await this.shoppingCartService.getItems();
      for(let i = 0; i < this.items.length; i++){
        this.items[i].in_cart = true;

        if(this.items[i].price !== undefined){
            this.totalPrice += this.items[i].price as number;
        }
      }
   }
}
