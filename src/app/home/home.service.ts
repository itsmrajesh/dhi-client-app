import { DhiApiKeyBasicDTO } from './model/dhi-api-key-basic-dto';
import { Tenant } from './model/tenant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInfo } from './model/api-key';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  base_url = environment.base_url_v1;


  getTenants() {
    return this.http.get<Tenant[]>('./assets/data.json');
  }

  newApiReg(tenant: DhiApiKeyBasicDTO) {
    return this.http.post(`${this.base_url}newapikey`, tenant);
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
