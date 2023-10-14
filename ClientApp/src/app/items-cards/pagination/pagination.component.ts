import { Component, EventEmitter, Output } from '@angular/core';
import { BeerService } from 'src/app/service/beer.service';
import { PaginationService } from 'src/app/service/pagination.sevice';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() changePaginationEvent = new EventEmitter();

  public currentPage: number = 1;

  public numberOfPages: number;
  public changeFirstLi: boolean = true;
  public changeSecondLi: boolean = true;
  public changeThirdLi: boolean = true;

  constructor(private itemsService: BeerService, private paginationService: PaginationService) {
    this.numberOfPages = this.calculateNumberOfPages();
  }

  calculateNumberOfPages(): number{
    console.log(this.itemsService.items)
    const numberOfItems = this.itemsService.items.length;
    return Math.floor(numberOfItems / 6);
  }

  changeToNextPage(): void {
    console.log(this.numberOfPages);
    this.changePagination(6,6, 1);
    this.changePaginationEvent.emit()
  }

  changeToPreviousPage(){
    this.changePagination(-6,-6, -1);
    this.changePaginationEvent.emit()
  }

  firstLiClickHandler(): void {
    this.changePaginationEvent.emit()
  }

  secondLiClickHandler(): void {
    this.changePagination(6,6, 1);
    this.changePaginationEvent.emit()
  }

  thirdLiClickHandler(): void {
    this.changePagination(2*6,2*6, 2);
    this.currentPage += 2;
    this.changePaginationEvent.emit()
  }

  changePagination(startIndex: number, endIndex: number, currentPage: number){
    this.paginationService.beersIndexStart += startIndex;
    this.paginationService.beersIndexEnd += endIndex;
    console.log(this.paginationService.beersIndexEnd);
    this.currentPage += currentPage;
    this.checkLiDisplay()
  }

  checkLiDisplay(){
    if(this.currentPage + 2 > this.numberOfPages || this.currentPage + 1 > this.numberOfPages){
      this.changeThirdLi = false;
    }else{
      this.changeThirdLi = true;
    }
    if(this.currentPage + 1 > this.numberOfPages){
      this.changeSecondLi = false;
    }else{
      this.changeSecondLi = true
    }
  } 
}
