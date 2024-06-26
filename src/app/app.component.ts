import { Component, OnInit } from '@angular/core';
import { User } from './app.model';
import { UserServiceService } from './services/user-service.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users!: User[];
  title = 'practiceMaterial';
  public displayColumns: string[] =["User Name", "Password"]
  constructor(private userService: UserServiceService){
  }
  ngOnInit(): void {
    this.getUsersComponent();
  }
  getUsersComponent(){
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
    })
  }
  
}
