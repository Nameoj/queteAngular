import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Homer',
    firstName : 'simpson',
    age : 38,
    quote :'',
    photo : 'https://images.immediate.co.uk/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&lb=576,383&background=white'
  }

  showAge = true;

  masquer() {
    this.showAge = !this.showAge;
  }

  constructor() { }

  ngOnInit() {
  }

}
