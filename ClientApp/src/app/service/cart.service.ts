import { Injectable } from '@angular/core';
import { IBeer } from '../IBeer';

@Injectable({
    providedIn: 'root'
  })
export class ShoppingCartService{
    
    Items: Set<IBeer> = new Set<IBeer>(); 

    constructor() {}

    async addItem(item: IBeer): Promise<void>
    {
        this.Items.add(item);
    }

    async removeItem(itemId: number): Promise<void>
    {
        for(let item of this.Items){

            if(item.id === itemId){
                this.Items.delete(item);
                break;
            }
        }
    }

    async getItems(): Promise<IBeer[]>{
        return Array.from(this.Items);
    }
}