import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-item-from-cart',
  templateUrl: './remove-item-from-cart.component.html',
  styleUrls: ['./remove-item-from-cart.component.scss']
})
export class RemoveItemFromCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  removeItemFromCart(){
    console.log("OMG")
  }
}
