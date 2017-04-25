import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

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
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(error): void {
    const body = JSON.parse(error._body);
    this.errorMessage = body.message;
    this.ifError = true;
    this.loading = false;
  }

  handleSuccess(result): void {
    localStorage.setItem('token', result.data);
    /* set user information */
    const jwtHelper = new JwtHelper();
    const token = result.token || result.data;
    const decodedData = jwtHelper.decodeToken(token);
    localStorage.setItem('firstname', decodedData.firstname);
    localStorage.setItem('lastname', decodedData.lastname);
    localStorage.setItem('roleId', decodedData.roleId);
    localStorage.setItem('id', decodedData.id);
    /* set user information */
    this.router.navigate(['/']);
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
          this.handleSuccess,
          this.handleError,
          () => this.loading = false
        );
  }

  signUp(): void {
    this.ifError = false;
    this.loading = true;
    this.authService.signUp(this.signUpInfo)
        .subscribe(
          this.handleSuccess,
          this.handleError,
          () => this.loading = false
        );
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
