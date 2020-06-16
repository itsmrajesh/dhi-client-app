import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.user = this.appService.logedInUser;
  }

}
