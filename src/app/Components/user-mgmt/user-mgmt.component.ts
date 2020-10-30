import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Entities/user';
import { UserMgmtService } from 'src/app/Services/user-mgmt.service';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnInit {
  users:User[]=[];
  user:User;
  asending:boolean=false;decending:boolean=true;
  public searchString:string="";

  constructor(private router: Router,private toastr:ToastrService,private userService:UserMgmtService) {
    this.user=new User(); 
  }
  getAllUsers(){
    this.userService.getAllUserDetails().subscribe((res:any)=>{
      this.users=res;
    });
  }
  sort(column:any)
  {
    if(typeof(this.users[0][column])=="number"){
      this.users=this.users.sort((a,b)=>{return b[column]-a[column]});
      if(this.decending==false){this.users.reverse(); this.decending=true}else{this.decending=false;}
      
    }
    if(typeof(this.users[0][column])=="string"){
      this.users=this.users.sort((a,b)=>{return b[column].toLocaleLowerCase() <a[column].toLocaleLowerCase() ?1:-1});
      if(this.decending==false){this.users.reverse(); this.decending=true}else{this.decending=false;}
    }
    if(typeof(this.users[0][column])=="object"){
      this.users=this.users.sort((a,b)=>{return b[column]<a[column]?1:-1});
      if(this.decending==false){this.users.reverse(); this.decending=true}else{this.decending=false;}
    }
        
  }
  search(filters:string)
  {
    this.users=this.users.filter(objfilter);
    function objfilter(user:User){
      for (const key in user) {
        if(typeof(user[key])=='string'){
          if(user[key].toLocaleLowerCase().indexOf(filters.toLocaleLowerCase())>=0){ return user}      
        }
      }
     }
  }

  IsActiveName(isActive){
    if(isActive===1)
     return "Active";
     else
      return "InActive";
  }

  role(roleId){
    switch(roleId){
      case "1,2":
        return "Admin "+","+"User";
      case "1":
        return "Admin";
      case "2":
        return "User";
    }

  }

  editUser(id){
    this.router.navigate(["/main/Admin/updateUser", id]);
  }
  deleteUser(id,username){
    if(confirm('Are sure delete this user "'+ username+'"?'))
    {
      debugger
       this.userService.deleteUser(id).subscribe((data:any)=>{
        if(data){this.toastr.success('User is InActive!', 'Success!');}
        else{this.toastr.warning('Something went wrong!', 'Failed!');}
         this.getAllUsers();
        });
       
    }
  }  
  addUser(){
    this.router.navigate(["/main/Admin/addUser"]);
  }
  clearFilters(){
    this.searchString='';
    this.getAllUsers();
    }
  ngOnInit() {
    this.getAllUsers();
  }

}
