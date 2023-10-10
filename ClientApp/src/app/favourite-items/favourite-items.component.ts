import { Component, OnInit} from '@angular/core';
import { FavouriteItemsService } from '../service/favourite-items.service';
import { IBeer } from '../IBeer';
import { IItemsStrategy } from '../items-cards/design-patterns/strategies/interfaces/IItemsStrategy';
import { FavouriteItemsStrategy } from '../items-cards/design-patterns/strategies/favourite-items-strategy';

@Component({
  selector: 'favourite-items',
  templateUrl: './favourite-items.component.html',
  styleUrls: ['./favourite-items.component.scss']
})
export class FavouriteItemsComponent  {
  beers: IBeer[] = [];

  ItemsStrategy!: IItemsStrategy;

  constructor(favouriteItemsService: FavouriteItemsService) {
    this.ItemsStrategy = new FavouriteItemsStrategy(favouriteItemsService);
  }
}
