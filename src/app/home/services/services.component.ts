import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeService } from './../home.service';
import { ApiInfo } from './../model/api-key';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  apiServices: ApiInfo[] = [];

  apiForm: FormGroup;

  canUpdate = false;

  constructor(private homeService: HomeService, private formBuilder: FormBuilder) {
    this.apiForm = this.formBuilder.group({
      name: [],
      description: []
    });
  }

  ngOnInit(): void {
    this.loadApiServices();
  }

  loadApiServices() {
    this.homeService.getApiServices().subscribe(resp => {
      this.apiServices = resp;
    });
  }


  newApiService() {

    if (this.canUpdate) {
      //update
    } else {
      //add new api service
    }
    
  }
  
  edit(service: any) {
    this.canUpdate = true;
    this.apiForm.patchValue(service);
  }
  
  
  delete(service: ApiInfo) {
    const status = confirm(`Are you sure to delete ${service.name} ?.`);
    if (status) {
      //delete
      alert('deleted');
    } else {
      // dont do anything
    }
  }

  close() {
    this.canUpdate = false;
    this.apiForm.reset();
  }

}
