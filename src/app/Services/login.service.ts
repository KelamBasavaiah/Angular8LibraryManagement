import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Entities/user';
import { Login } from '../Entities/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
result:boolean;
login:Login;
public prefix:string="https://localhost:44328/User";
  constructor(private http:HttpClient) { this.login= new Login();}

  authenticateUser(username,password)
  {
    this.login.username=username;
    this.login.password=password;
     return this.http.post(this.prefix+"/login",this.login)
   
  }
  setRoute(value){
    this.login=value;
    this.result=value.aurthorize;
  }
  canActivate() {
    
    return this.result;
  }
  getBooksforUser(userId){
    return this.http.get(this.prefix+"/GetBooks?userId="+userId)
  }
  returnBook(userId){
    return this.http.post(this.prefix+"/returnBook?id="+userId,"")
  }

}


  