import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class CookieManagementService {

    constructor(private cookieService: CookieService){}
  
    check(cookieKey: string): boolean
    {
      return this.cookieService.check(cookieKey);
    }

    set(cookieKey: string, value: string): void
    {
      const cookieExists = this.check(cookieKey);

	    if(!cookieExists)
	    {
	      this.cookieService.set(cookieKey,value);
	    }
    }

    get(cookieKey: string): string
    {
    	return this.cookieService.get(cookieKey);
    } 
}
