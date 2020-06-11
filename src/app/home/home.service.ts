import { Tenant } from './model/tenant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getTenants() {
    return this.http.get<Tenant[]>('../../assets/data.json');
  }

}
