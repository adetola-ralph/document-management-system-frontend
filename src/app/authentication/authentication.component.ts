import { Component } from '@angular/core';

@Component({
  selector: 'auth-display',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  signup: boolean;

  constructor() {
    this.signup = false;
  }
}
