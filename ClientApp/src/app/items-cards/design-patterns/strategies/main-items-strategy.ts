import { IBeer } from "src/app/IBeer";
import { IItemsStrategy } from "./interfaces/IItemsStrategy";
import { PaginationService } from "src/app/service/pagination.sevice";
import { BeerService } from "src/app/service/beer.service";

export class MainItemsStrategy  implements IItemsStrategy { 

    private items: IBeer[] = [];
    private showPaginationFlag: boolean = false;
    private totalItems: number = 0;
    constructor(private _beer: BeerService, private paginationService: PaginationService ){
    }

    async getItems(): Promise<IBeer[]> {
      
        // Simulate synchronous behavior by blocking until the promise is resolved
        await this._beer.getItems()
          .then((itemsResponse: IBeer[]) => {
            this.showPaginationFlag = itemsResponse.length > 6;
            this.totalItems = itemsResponse.length;
            this.items = itemsResponse.slice(
              this.paginationService.beersIndexStart, 
              this.paginationService.beersIndexEnd
              );
          })
          .catch(error => {
            console.error('Error fetching items:', error);
            throw error;
          });
      
        return this.items;
      }

    showPagination(): boolean{
          return this.showPaginationFlag;
    }

    getTotalItems():number{
      return this.totalItems;
    } 
}