import { JwtService } from './jwt.service';
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

  constructor(private http: HttpClient,
              //private jwtService: JwtService
              ) { }

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


  private loginInit(user: LoginRequest, tokenObj: string) {
    this.logedUser = user.email;
    // tslint:disable-next-line: no-string-literal
    const token = tokenObj['token'];
    this.storeJwtToken(token);
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  isUserLogedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    const token = localStorage.getItem(this.JWT_TOKEN);
    /*if (token) {
      if (this.jwtService.isExpired(token)) {
        return null;
      } else {
        return token;
      }
    } else {
      return null;
    }*/
    return token;
  }


  logOut() {
    this.logedUser = '';
    this.removeJwtToken();
  }

  private removeJwtToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }


}
