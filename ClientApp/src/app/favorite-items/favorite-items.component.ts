import { Component, OnInit} from '@angular/core';
import { FavoriteItemsService } from '../service/favorite-items.service';
import { IBeer } from '../IBeer';
import { IItemsStrategy } from '../items-cards/design-patterns/strategies/interfaces/IItemsStrategy';
import { FavoriteItemsStrategy } from '../items-cards/design-patterns/strategies/favorite-items-strategy';

@Component({
  selector: 'favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss']
})
export class FavoriteItemsComponent  {
  beers: IBeer[] = [];

  ItemsStrategy!: IItemsStrategy;

  constructor(favoriteItemsService: FavoriteItemsService) {
    this.ItemsStrategy = new FavoriteItemsStrategy(favoriteItemsService);
  }
}
