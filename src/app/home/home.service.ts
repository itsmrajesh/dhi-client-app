import { Tenant } from './model/tenant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInfo } from './model/api-key';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getTenants() {
    return this.http.get<Tenant[]>('./assets/data.json');
  }

  newApiReg(tenant: Tenant) {
    return this.http.post('', tenant);
  }

  getTenantsById(id: string) {
    return this.http.get<Tenant[]>('');
  }

  updateTenant(tenant: Tenant) {
    return this.http.put('', tenant);
  }

  deleteTenant(tenant: Tenant) {

  }


  getApiServices() {
    return this.http.get<ApiInfo[]>('./assets/services.json');
  }

}
