import { IBeer } from "src/app/IBeer";
import { IItemsStrategy } from "./interfaces/IItemsStrategy";
import { PaginationService } from "src/app/service/pagination.sevice";
import { BeerService } from "src/app/service/beer.service";

export class MainItemsStrategy implements IItemsStrategy { 
    constructor(private _beer: BeerService, private paginationService: PaginationService ){}

    async getItems(): Promise<IBeer[]> {
        let items: IBeer[] = [];
      
        // Simulate synchronous behavior by blocking until the promise is resolved
        await this._beer.getBeersFromApi()
          .then((itemsResponse: IBeer[]) => {
            items = itemsResponse.slice(this.paginationService.beersIndexStart, this.paginationService.beersIndexEnd);
          })
          .catch(error => {
            console.error('Error fetching items:', error);
            throw error;
          });
      
        return items;
      }
}