import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserMgmtService {

  constructor(private http:HttpClient) { }

  addUser(userdetails:User){
    return this.http.post("https://localhost:44328/api/UserMgmt",userdetails);
  }
  getUser(id){
    return this.http.get("https://localhost:44328/api/UserMgmt/"+id);
  }
}
