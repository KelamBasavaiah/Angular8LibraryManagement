import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Entities/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
result:boolean;

  constructor(private http:HttpClient) { }

  authenticateUser(username,password)
  {
     return this.http.get("https://localhost:44328/api/User/"+username+"/"+password)
   
  }
  setRoute(value){
    this.result=value;
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


  