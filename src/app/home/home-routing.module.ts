import { TenantsListComponent } from './tenants-list/tenants-list.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TenantsListComponent
      }, {
        path: 'tlist',
        component: TenantsListComponent
      }, {
        path: 'services',
        component: ServicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
