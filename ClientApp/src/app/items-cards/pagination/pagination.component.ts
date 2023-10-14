import { Component } from '@angular/core';
import { BeerService } from 'src/app/service/beer.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  public currentPage: number = 1;
  public numberOfPages: number = 0;
  constructor(private itemsService: BeerService) {
    this.numberOfPages = this.calculateNumberOfPages();
  }

  calculateNumberOfPages(): number{
    const numberOfItems = this.itemsService.length;
    return Math.ceil(numberOfItems / 6);
  }
}
