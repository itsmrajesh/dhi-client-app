import { JwtService } from './jwt.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule,
    HttpClientModule
  ],
  providers: [
    JwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AuthModule { }
