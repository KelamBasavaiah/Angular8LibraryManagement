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
  constructor(private http:HttpClient) { }

  authenticateUser(username,password)
  {
     return this.http.get("https://localhost:44328/api/User/"+username+"/"+password)
   
  }
  setRoute(value){
    this.login=value;
    console.log(this.login);
    this.result=value.aurthorize;
  }
  canActivate() {
    
    return this.result;
  }
  getBooksforUser(userName){
    return this.http.get("https://localhost:44328/api/User?userName="+userName)
  }
  returnBook(userbook){
    console.log(userbook);
    return this.http.delete("https://localhost:44328/api/User",userbook)
  }

}


  