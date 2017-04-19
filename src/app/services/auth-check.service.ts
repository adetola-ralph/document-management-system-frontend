import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthCheck {
  jwtHelper: JwtHelper;
  constructor() {
    this.jwtHelper = new JwtHelper();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
}
