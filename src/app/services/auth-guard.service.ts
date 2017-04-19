import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    // get token from localstorage
    // check if there is a token and if it is valid
    return true;
  }
}

export class LoginGuard implements CanActivate {
  canActivate() {
    // get token from localstorage
    // check if there is a token and if it is valid
    // for auth route
    return true;
  }
}
