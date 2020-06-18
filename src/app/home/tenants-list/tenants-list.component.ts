import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      tenantId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      serviceId: ['', Validators.required]
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
    this.homeService.newApiReg(this.newApiRegForm.value).subscribe(resp => {

      console.log(resp);

    },
      err => {
        console.log(err);

      }


    );
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

  get tenantId() {
    return this.newApiRegForm.get('tenantId');
  }


  get email() {
    return this.newApiRegForm.get('email');
  }



  get serviceId() {
    return this.newApiRegForm.get('serviceId');
  }




}
