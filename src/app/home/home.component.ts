import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: UserInformation;
  constructor(private authService: AuthenticationService) {
    this.signOut = this.signOut.bind(this);
  }

  ngOnInit() {
    this.userInfo = {
      firstname: localStorage.getItem('firstname'),
      lastname: localStorage.getItem('lastname'),
      roleid: localStorage.getItem('roleId'),
      id: parseInt(localStorage.getItem('id'), 10)
    };
  }

  signOut(): void {
    this.authService.signOut();
  }
}

interface UserInformation {
  firstname: string;
  lastname: string;
  roleid: string;
  id: number;
}
