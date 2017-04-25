import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SignInUserInfo, SignUpUserInfo } from './../authentication/authentication.helper';

@Injectable()
export class AuthenticationService {
  apiLoginLink: string;
  apiSignupLink: string;
  jwtHelper: JwtHelper;
  constructor(private http: Http) {
    this.jwtHelper = new JwtHelper();
    this.apiLoginLink = 'http://localhost:8080/api/users/login';
    this.apiSignupLink = 'http://localhost:8080/api/users';
  }

  signIn(signInObject: SignInUserInfo): Observable<any> {
    return this.http.post(this.apiLoginLink, signInObject)
            .map(res => res.json());
  }

  signUp(signUpObject: SignUpUserInfo): Observable<any> {
    return this.http.post(this.apiSignupLink, signUpObject)
               .map(res => res.json());
  }
}

interface AuthObject {
  readonly success: boolean;
  readonly message: string;
  readonly data?: Object|string|Array<any>;
  readonly token?: string;
}
