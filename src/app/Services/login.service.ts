import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}


  