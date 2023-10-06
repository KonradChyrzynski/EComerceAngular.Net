import { Component, OnInit } from '@angular/core';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-page-swapper',
  templateUrl: './page-swapper.component.html',
  styleUrls: ['./page-swapper.component.scss']
})
export class PageSwapperComponent implements OnInit {
  public pages: number = 0;

  constructor() {  }
  
  

  ngOnInit(): void {
  }

}
