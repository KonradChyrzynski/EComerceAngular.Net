import { FavouriteItemsService } from "src/app/service/favourite-items.service";
import { IItemsStrategy } from "./interfaces/IItemsStrategy";
import { IBeer } from "src/app/IBeer";
import { PaginationService } from "src/app/service/pagination.sevice";

export class FavouriteItemsStrategy  implements IItemsStrategy  {

    private items!: IBeer[];  
    private showPaginationFlag: boolean = false;
    private totalItems: number = 0;

    constructor(private favItemsService: FavouriteItemsService ,
        private paginationService: PaginationService) {
    }

    async getItems(): Promise<IBeer[]>
    {
         await this.favItemsService.getFavouriteItems()
         .then((itemsResponse: IBeer[]) =>
         {

            const itemsLengt: number = itemsResponse.length
            this.showPaginationFlag = itemsLengt > 6;

            this.totalItems = itemsLengt;
            this.items = itemsResponse.slice(
                this.paginationService.beersIndexStart,
                this.paginationService.beersIndexEnd
                )
         })
         .catch((error => {
                    console.error(error);
                    throw error;
                }));;

         return this.items;
    }

    showPagination(): boolean{
          return this.showPaginationFlag;
    }

    getTotalItems(): number{
        return this.totalItems;
    }
}