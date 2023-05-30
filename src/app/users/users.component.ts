import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ListUsers : any = []

  constructor (private users : UsersService){}

  ngOnInit(): void {
    this.ListUsers =  this.users.GetAllUsers()
   console.log(this.ListUsers)
  }
  GetAllUser(){
   
  }

}
