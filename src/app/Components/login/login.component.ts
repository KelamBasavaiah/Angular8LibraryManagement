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
  this.loginS.authenticateUser(username,password).subscribe((data:any)=>{
    if(data.aurthorize){
      this.loginS.setRoute(data);
      this.router.navigate(["/main/home"]);
    }
    else{
      alert("Enter valid credentials");
    }
  })

}
  ngOnInit() {
  }

}
