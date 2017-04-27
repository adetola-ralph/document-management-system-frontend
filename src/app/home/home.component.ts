import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: UserInformation;
  constructor() { }

  ngOnInit() {
    this.userInfo = {
      firstname: localStorage.getItem('firstname'),
      lastname: localStorage.getItem('lastname'),
      roleid: localStorage.getItem('roleId'),
      id: parseInt(localStorage.getItem('id'), 10)
    };
  }
}

interface UserInformation {
  firstname: string;
  lastname: string;
  roleid: string;
  id: number;
}
