import { FavoriteItemsService } from "src/app/service/favorite-items.service";
import { IItemsStrategy } from "./interfaces/IItemsStrategy";
import { IBeer } from "src/app/IBeer";

export class FavoriteItemsStrategy implements IItemsStrategy {

    constructor(private favItemsService: FavoriteItemsService )
    {
    }

    async getItems(): Promise<IBeer[]>
    {
         return this.favItemsService.getFavorites();
    }
}