import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private jwtHelper: JwtHelperService) { }

  isExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }
}
