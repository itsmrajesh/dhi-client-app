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
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });

  }



  ngOnInit(): void {
  }

  validateLogin() {
    console.log(this.username.value);
    console.log(this.password.value);

    const user = { email: this.username.value, password: this.password.value };

    this.authService.login(user).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/home');
      },
      err => {
        console.error(err);

      }
    )

  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
