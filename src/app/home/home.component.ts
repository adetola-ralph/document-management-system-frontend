import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userInfo: UserInformation;
  constructor() {}
}

interface UserInformation {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  id: number;
}
