import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  base_url = environment.base_url;

  login(user) {
    return this.http.post(`${this.base_url}login`, user);
  }


}
