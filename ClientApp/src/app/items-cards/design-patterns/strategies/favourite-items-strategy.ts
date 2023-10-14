import { FavouriteItemsService } from "src/app/service/favourite-items.service";
import { IItemsStrategy } from "./interfaces/IItemsStrategy";
import { IBeer } from "src/app/IBeer";

export class FavouriteItemsStrategy implements IItemsStrategy {

    constructor(private favItemsService: FavouriteItemsService )
    {

    }

    async getItems(): Promise<IBeer[]>
    {
         return this.favItemsService.getFavouriteItems();
    }

    showPagination(): boolean{
        return false;
    }
}