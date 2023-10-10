import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../IBeer';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class BeerService {
    constructor(private http: HttpClient) { }

    beers: IBeer[] = []
    
    url = 'https://api.punkapi.com/v2/beers';

    async getArrayOfItems(): Promise<void> {
        try {
            const response: any = await this.http.get(this.url).toPromise();
            this.beers = response as IBeer[];

            await this.fulfillMissingFields();
        } catch (error) {
            console.error('Error fetching beers:', error);
            throw error;
        }
    }

    async getItems(): Promise<IBeer[]> {

        if(this.beers.length === 0){
            await this.getArrayOfItems();
        }

        return this.beers;
    }

    async fulfillMissingFields(): Promise<void> {
        const pricePromises: Promise<number>[] = [];

        for (const bear of this.beers) {
            bear.in_cart = false;
            bear.favourite = false;

            const pricePromise: Promise<number> = this.fetchPriceById(bear.id)
                .then(price => bear.price = price);


            pricePromises.push(pricePromise);
        }

        await Promise.all(pricePromises);
    }

    async fetchPriceById(id: number): Promise<number> {
        //simulate db call
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                const staticPrice = 15.0;
                resolve(staticPrice);
            }, 1000); 
        });
    }
}
