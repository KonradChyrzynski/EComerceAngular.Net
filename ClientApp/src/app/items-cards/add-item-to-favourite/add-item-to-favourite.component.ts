import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBeer } from 'src/app/IBeer';
import { FavouriteItemsService } from 'src/app/service/favourite-items.service';

@Component({
  selector: 'app-add-item-to-favourite',
  templateUrl: './add-item-to-favourite.component.html',
  styleUrls: ['./add-item-to-favourite.component.scss']
})
export class AddItemToFavouriteComponent {

  @Input()
  item!: IBeer;
  constructor(private favouriteItemsService: FavouriteItemsService) {
  }

  handleStarClick(){
    if(!this.item.favourite)
    {
      this.item.favourite = true;
      this.favouriteItemsService.addToFavourite(this.item)
    }
    else{
      this.item.favourite = false;
      this.favouriteItemsService.removeFromFavourite(this.item.id)
    }
  }
}
