import { FormGroup, FormBuilder } from '@angular/forms';
import { Tenant } from './../model/tenant';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { } from 'jquery'
import { } from 'bootstrap';
import { confirm } from 'bootbox';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit {

  tenants: Tenant[] = [];

  tenantIds: string[] = [];

  newApiRegForm: FormGroup;

  updateForm: FormGroup;

  selectedTenant: Tenant;

  // const $ = require('jquery');
  // jQuery = require("jquery");
  // bootstrap = require('bootstrap');
  // bootbox = require('bootbox');



  constructor(private homeService: HomeService, private formBuilder: FormBuilder) {
    this.newApiRegForm = this.formBuilder.group({
      tenantId: [],
      email: [],
      serviceId: [],
      apiKey: []
    });

    this.updateForm = this.formBuilder.group({
      status: ['active']
    });
  }

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


  addNewApi() {
    console.log(this.newApiRegForm.value);
  }

  edit(tenant: Tenant) {
    this.selectedTenant = tenant;
  }

  update() {

  }

  delete(tenant: Tenant) {
    confirm({
      size: 'small',
      message: 'Are you sure?',
      callback(result) {
        console.log(result);
      }
    });
  }


}
