import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { IBeer } from 'src/app/IBeer';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  item!: IBeer;
  public state: boolean = true;
  public route: string = ''

  constructor(router: Router) {
    this.route = router.url
  }

  getImagePosition(): string{
    let imgClass:string = ''

    switch(this.route)
    {
      case '/shopping-cart':
        imgClass = 'img-cart'; 
        break;
      default:
        imgClass = 'img-basic';
    }

    return imgClass;
  }
}