import { Injectable } from "@angular/core";
import { IBeer } from "../IBeer";

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService 
{
    beers: Set<IBeer> = new Set(
    );

    constructor(){}

    addToFavorite(beer: IBeer): void
    {
        this.beers.add(beer)
    }

    getFavorites(): Promise<IBeer[]>
    {
        return new Promise<IBeer[]>((resolve) => 
            resolve(Array.from(this.beers))
        )
    }
}

