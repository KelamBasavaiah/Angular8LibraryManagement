import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMgmtService {

  constructor(private http:HttpClient) { }
  getAllUserDetails(){
    return this.http.get("https://localhost:44328/api/UserMgmt");
  }
}
