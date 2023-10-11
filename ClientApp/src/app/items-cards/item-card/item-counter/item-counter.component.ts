import { Component, Input } from '@angular/core';
import { IBeer } from 'src/app/IBeer';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss']
})
export class ItemCounterComponent {
  @Input()
  item!: IBeer;

  increaseAmmount(){
      this.item.in_cart_amount = this.item.in_cart_amount as number + 1;
  }

  decreaseAmmount(){
    if(this.item.in_cart_amount as number !== 1){
      this.item.in_cart_amount = this.item.in_cart_amount as number - 1;
    }
  }
}
