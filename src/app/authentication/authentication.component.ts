import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignInUserInfo, SignUpUserInfo } from './authentication.helper';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  signup: boolean;
  errorMessage: string;
  ifError: boolean;
  signInInfo: SignInUserInfo;
  signUpInfo: SignUpUserInfo;
  loading: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.signup = false;
    this.errorMessage = '';
    this.ifError = false;
    this.signInInfo = {
      username: '',
      password: ''
    };
    this.signUpInfo = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    };
    this.loading = false;
  }

  tabChange(event): void {
    console.log(event);
    if (event.index === 1) {
      this.signup = true;
    } else {
      this.signup = false;
    }
  }

  signIn(): void {
    this.ifError = false;
    this.loading = true;
    this.authService.signIn(this.signInInfo)
        .subscribe(
          (result) => {
            localStorage.setItem('token', result.data);
            this.router.navigate(['/']);
          },
          (error) => {
            const body = JSON.parse(error._body);
            this.errorMessage = body.message;
            this.ifError = true;
            this.loading = false;
          },
          () => this.loading = false
        );
  }

  signUp(): void {
    this.ifError = false;
    this.loading = true;
    this.authService.signUp(this.signUpInfo)
        .subscribe(
          (result) => {
            localStorage.setItem('token', result.token);
            this.router.navigate(['/']);
          },
          (error) => {
            const body = JSON.parse(error._body);
            this.errorMessage = body.message;
            this.ifError = true;
            this.loading = false;
          },
          () => this.loading = false
        );
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
