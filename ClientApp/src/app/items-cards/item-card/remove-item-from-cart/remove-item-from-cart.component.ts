import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from 'src/app/IBeer';

@Component({
  selector: 'app-remove-item-from-cart',
  templateUrl: './remove-item-from-cart.component.html',
  styleUrls: ['./remove-item-from-cart.component.scss']
})
export class RemoveItemFromCartComponent implements OnInit {
  @Input()
  item!: IBeer;
  constructor() { }

  ngOnInit(): void {
  }

  removeItemFromCart(){
    this.item.in_cart = false;
    this.item.in_cart_amount = 0;
    document.getElementById(`app-item-${this.item.id}`)?.remove();
  }

}