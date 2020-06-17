import { LoginRequest } from './../home/model/login-request';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  base_url = environment.base_url;

  private JWT_TOKEN = 'DHI_JWT_TOKEN';

  logedUser: string;

  login(user: LoginRequest): Observable<boolean> {
    return this.http.post<any>(`${this.base_url}login`, user, { headers: { skip: 'true' } }).pipe(
      tap(token => this.loginInit(user, token)),
      mapTo(true),
      catchError(err => {
        return of(false);
      })
    );
  }


  private loginInit(user: LoginRequest, token: string) {
    this.logedUser = user.email;
    this.storeJwtToken(token['token']);
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  isUserLogedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }


  logOut() {
    this.logedUser = '';
    this.removeJwtToken();
  }

  private removeJwtToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }


}
