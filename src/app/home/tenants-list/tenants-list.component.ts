import { Tenant } from './../model/tenant';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit {

  tenants: Tenant[] = [];

  tenantIds: string[] = [];


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loadTenants();
  }

  loadTenants() {
    this.homeService.getTenants().subscribe(res => {
      this.tenants = res;
      this.tenants.forEach(ele => {
        this.tenantIds.push(ele.tenantId);
      })
    })
  }

  onChangeTenant(tenantId: string) {
    console.log(tenantId);

  }





}
