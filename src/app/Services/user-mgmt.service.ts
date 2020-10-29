import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserMgmtService {

  constructor(private http:HttpClient) { }
  
  getAllUserDetails(){
    return this.http.get("https://localhost:44328/UserMgmt/GetAllUsers");
  }

  addUser(userdetails:User){
    return this.http.post("https://localhost:44328/UserMgmt/AddUser",userdetails);
  }
    
  getUser(id){
    return this.http.get("https://localhost:44328/UserMgmt/GetUser?id="+id);
  }
  deleteUser(id){
    return this.http.delete("https://localhost:44328/UserMgmt/DeleteUser?userId="+id);
  }

}
