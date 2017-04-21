import { Component } from '@angular/core';

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

  constructor(private authService: AuthenticationService) {
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
    // console.log(JSON.stringify(this.signInInfo));
    // this.authService.signIn(this.signInInfo)
    //     .subscribe(
    //       result => console.log(result),
    //       error => console.log(error)
    //     );
  }

  signUp(): void {
    this.loading = true;
    this.authService.signUp(this.signUpInfo)
        .subscribe(
          (result ) => {
            console.log(result);
          },
          error => console.log(error),
          () => this.loading = false
        );
  }
}
