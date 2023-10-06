import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from 'src/app/IBeer';
import { FavoriteItemsService } from 'src/app/service/favorite-items.service';

@Component({
  selector: 'app-add-item-to-favorite',
  templateUrl: './add-item-to-favorite.component.html',
  styleUrls: ['./add-item-to-favorite.component.scss']
})
export class AddItemToFavoriteComponent {

  @Input()
  beer!: IBeer;

  constructor(private favoriteItemsService: FavoriteItemsService) {}


  addToFavorite(){
    this.favoriteItemsService.addToFavorite(this.beer)
  }

}
