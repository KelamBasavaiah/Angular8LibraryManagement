import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginS:LoginService) { }
login(username,password)
{
  console.log(username,password)
  this.loginS.authenticateUser(username,password).subscribe((data:any)=>{
    if(data){
      this.loginS.setRoute(data);
      this.router.navigate(["/Admin/home"]);
    }
    else{
      alert("Enter valid credentials");
    }
  })
  // if ( this.loginS.authenticateUser(username,password))
  // {
  //   this.router.navigate(["/Admin/home"]);
  // } 
  // else 
  // {
  //   alert("Enter valid credentials");
  // }
 

}
  ngOnInit() {
  }

}
