import { Injectable } from "@angular/core";
import { IBeer } from "../IBeer";

@Injectable({
  providedIn: 'root'
})
export class FavouriteItemsService 
{
    beers: Set<IBeer> = new Set(
    );

    constructor(){}

    addToFavourite(beer: IBeer): void
    {
        this.beers.add(beer)
    }

    removeFromFavourite(id: number) {
        this.beers.forEach(element => {
            if(element.id === id){
                this.beers.delete(element)
            }
        });
    }

    getFavouriteItems(): Promise<IBeer[]>
    {
        return new Promise<IBeer[]>((resolve) => 
            resolve(Array.from(this.beers))
        )
    }
}

