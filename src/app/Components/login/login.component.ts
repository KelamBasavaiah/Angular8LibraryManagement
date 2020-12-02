import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(private router: Router,private loginS:LoginService) { }
login(username,password)
{
  this.isLoading = true;
  this.loginS.authenticateUser(username,password).subscribe((data:any)=>{
    if(data.aurthorize){
      this.loginS.setRoute(data);
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(["/main/home"]);
      }, 3000);
    }
    else{
      alert("Enter valid credentials");
    }
  })

}
Register(){
  this.router.navigate(["/Register"]);
}
  ngOnInit() {
  }

}
