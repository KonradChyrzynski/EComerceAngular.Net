import { Component, Input } from '@angular/core';
import { IBeer } from 'src/app/IBeer';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  beer!: IBeer;

  constructor() { }
}
