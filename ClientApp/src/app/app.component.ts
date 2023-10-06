import { Component } from '@angular/core';
import { CookieManagementService } from './service/cookies-management.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  constructor(private cookieService: CookieManagementService){
    const userSessionCookieKey: string = "userSessionKey"
    const cookieExists: boolean = cookieService.check(userSessionCookieKey);


    if(!cookieExists)
    {
      const userGuid: string = uuidv4();
      this.cookieService.set(userSessionCookieKey,userGuid);
    }
  }
}
