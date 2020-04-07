import { Injectable } from '@angular/core';
import { LoginModel } from '../Models-Shared/login.model';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models-Shared/user.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:3000/user/';
  authEmitter: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  login(userData: LoginModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.baseUrl + 'login', userData);
  }

  register(userData: LoginModel): Observable<any> {
    return this.http.post<LoginModel>(this.baseUrl + 'register', userData);
  } 

  saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('auth-token', token);
  }

  saveUsernameToLocalStorage(username: string): void{
    localStorage.setItem('auth-username', username);
  }

  getToken(): string {
    return localStorage.getItem('auth-token');
  }

  getUsername():string {
    return localStorage.getItem('auth-username');
  }

  getTokenDetails(): any {

    const token = this.getToken();

    if (token) {
      const payload =  this.getToken().split('.')[1];
      const payloadData = atob(payload);

      return JSON.parse(payloadData);
      
    } else {
      return null;
    }
    
  }

  isLoggedIn(): boolean {

    const tokenDetails = this.getTokenDetails();
    
    if (tokenDetails && tokenDetails.exp > Date.now()/1000)
      return true;

    return false;
  }

  logout(): void{
    localStorage.clear();
  }

}
