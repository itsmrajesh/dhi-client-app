import { AuthService } from './../auth/auth.service';
import { AppServiceService } from './../app-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });

  }



  ngOnInit(): void {
  }

  validateLogin() {

    const user = this.loginForm.value;

    this.authService.login(user).subscribe(
      sucess => {
        if (sucess) {
          this.router.navigateByUrl('/home');
        } else {
          console.log(sucess);
        }

      }, error => {
        console.log(error);
      }
    );

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}