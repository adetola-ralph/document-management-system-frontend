import { Component } from '@angular/core';

import { SignInUserInfo, SignUpUserInfo } from './authentication.helper';

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

  constructor() {
    this.signup = false;
    this.errorMessage = '';
    this.ifError = false;
    this.signInInfo = {
      email: '',
      password: ''
    };
    this.signUpInfo = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    };
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
    console.log(JSON.stringify(this.signInInfo));
  }

  signUp(): void {
    console.log(JSON.stringify(this.signUpInfo));
  }
}
