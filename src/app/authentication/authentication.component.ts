import { Component } from '@angular/core';

@Component({
  selector: 'auth-display',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  signup: boolean;
  errorMessage: string;
  ifError: boolean;

  constructor() {
    this.signup = false;
    this.errorMessage = '';
    this.ifError = false;
  }
}
