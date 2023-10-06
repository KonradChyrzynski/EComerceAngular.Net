import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../service/pagination.sevice';
import { HttpClient } from '@angular/common/http';
import { MainItemsStrategy } from '../items-cards/design-patterns/strategies/main-items-strategy';
import { BeerService } from '../service/beer.service';
import { IItemsStrategy } from '../items-cards/design-patterns/strategies/interfaces/IItemsStrategy';

@Component({
  selector: 'app-main-items-layout',
  templateUrl: './main-items-layout.component.html',
  styleUrls: ['./main-items-layout.component.scss']
})
export class MainItemsLayoutComponent implements OnInit {

  ItemsStrategy!: IItemsStrategy; 

  constructor(
        paginationService: PaginationService,
        bearService: BeerService ,) {
    this.ItemsStrategy = new MainItemsStrategy(bearService,paginationService);
   }

  ngOnInit(): void {
  }

}
