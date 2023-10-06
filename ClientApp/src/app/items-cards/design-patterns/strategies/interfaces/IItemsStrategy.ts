import { IBeer } from "src/app/IBeer";

export interface IItemsStrategy
{
    getItems(): Promise<IBeer[]> 
}