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

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loadApiServices();
  }

  loadApiServices() {
    this.homeService.getApiServices().subscribe(resp => {
      this.apiServices = resp;
    });
  }

}
