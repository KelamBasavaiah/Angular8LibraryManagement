import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isAdmin:boolean=false;
  isAdminUser:boolean=false;
  isUser:boolean=false;
  username:string;
  constructor(private login:LoginService,private route:Router) { }

getRole(){
  if(this.login.login.role=="1,2")
  {
    this.isAdminUser=true;
    this.isUser=true;
  }
  else if(this.login.login.role=="1")
  {
    this.isAdmin=true;
  }
  else
  {
    this.isUser=true;
  };
  this.username=this.login.login.username;
}
  logout(){
  this.login.setRoute(false);
  this.route.navigate(["/login"]);
  }
  ngOnInit() {
    this.getRole();
  }

}
