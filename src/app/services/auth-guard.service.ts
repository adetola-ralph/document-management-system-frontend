import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


import { AuthCheck } from './auth-check.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authCheck: AuthCheck, private router: Router) {}

  canActivate() {
    if (this.authCheck.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authCheck: AuthCheck, private router: Router) {}

  canActivate() {
    if (!this.authCheck.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
