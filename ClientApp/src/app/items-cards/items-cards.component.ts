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

  items: IBeer[] = [];

  constructor(
      ) { 
  }

  async ngOnInit() {
      this.items = await this.ItemsStrategy.getItems();
  }
  
}
