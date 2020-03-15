import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loginEmitter: Subject<boolean> = new Subject<boolean>();
  expireDays: number = 1;

  constructor(private cookieService: CookieService) { }

  setUsername(username: string){
    this.cookieService.set( 'user-name',JSON.stringify(username), this.expireDays);
  }

  getUsername(){
    return this.cookieService.get('user-name');
  } 

}
