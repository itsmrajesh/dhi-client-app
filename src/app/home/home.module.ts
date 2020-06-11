import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { TenantsListComponent } from './tenants-list/tenants-list.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, TenantsListComponent, ServicesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HomeModule { }
