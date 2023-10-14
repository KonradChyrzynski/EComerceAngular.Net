import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from '../IBeer';
import { IItemsStrategy } from './design-patterns/strategies/interfaces/IItemsStrategy';

@Component({
  selector: 'app-items-cards',
  templateUrl: './items-cards.component.html',
  styleUrls: ['./items-cards.component.scss']
})
export class ItemsCardsComponent implements OnInit {
  @Input()
  ItemsStrategy!: IItemsStrategy;
  showPagination!: boolean; 
  items: IBeer[] = [];

  constructor(
      ) { 
  }

  async ngOnInit() {
      this.items = await this.ItemsStrategy.getItems();
      this.showPagination = this.ItemsStrategy.showPagination();
      }
  
  async changePage(){
    console.log("test")
    this.items = await this.ItemsStrategy.getItems();
  }
}
