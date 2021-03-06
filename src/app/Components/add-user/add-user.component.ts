import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Entities/user';
import { LoginService } from 'src/app/Services/login.service';
import { UserMgmtService } from 'src/app/Services/user-mgmt.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private toastr:ToastrService,
    private userMgmtService:UserMgmtService,private myActiveRoute:ActivatedRoute,private login:LoginService) {
   }

  userDetails = new User();
  userId:any = null;
  rolename:any;
  nameOfPage:any = 'Add User';
  nameOfButton:any = 'Add';
  selectedRole:any=[];
  role=[{"id":"1","name":"Admin"},
        {"id":"2","name":"User"}];
  displayRoleSelection:boolean =true;

  submitted=false;
  AddForm = this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required,Validators.minLength(8)]],
  phoneno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  mailid:['',[Validators.required,Validators.pattern('^.+@gmail.com$')]]
  //role:['',[Validators.required]]
})
get validationControl() {
  return this.AddForm.controls; 
 }

 formSubmit()
 {
   this.submitted=true;
   if (this.AddForm.invalid) {
     this.toastr.warning('Something went wrong...','Check & Update!!!')
     return;
   }
   this.userDetails.role=this.selectedRole.toString();
   if(this.userDetails.role==""){this.userDetails.role="2"}
   debugger;
   this.userMgmtService.addUser(this.userDetails).subscribe((data:any)=>{
     if(data){
      if(this.nameOfButton != 'Update'){
        this.toastr.success('User Added!', 'Success!');        
        this.router.navigateByUrl("/main/Admin/usermgmt");

      }else{
        this.toastr.success('User Updated!', 'Success!');
        this.router.navigateByUrl("/main/Admin/usermgmt");
      }       
     }else{
       this.toastr.warning('something went wrong!', 'Failed!');
     }
   })
   if(this.nameOfButton === 'Register'){
    this.router.navigateByUrl("/login");
  }
 }

 getUser(){
  this.userMgmtService.getUser(this.userId).subscribe((data:User)=>
  {
    this.userDetails=data;
    this.selectedRole=this.userDetails.role.split(",");
    this.changePageName();
  }); 
 }

changePageName(){
   this.nameOfPage = 'Update User';
   this.nameOfButton = 'Update';
 }
 someChecked(){
   if(this.selectedRole.length>0)
    return true;
  else
    return false;
 }
roleChange(event){
  let index=this.selectedRole.indexOf(event.target.value);
  if(index==-1)
    this.selectedRole.push(event.target.value);
  else
    this.selectedRole.splice(index,1);
}
register(){
  this.nameOfPage = 'Register User';
  this.nameOfButton = 'Register';
  this.displayRoleSelection=false;
  this.userDetails.role=2;
}
  ngOnInit():void {
    this.myActiveRoute.params.subscribe(res=>
      {
        this.userId = res["id"];
        // this.userId = 2010;
    });
    if(this.userId != null){
      this.getUser();
    }
    else if (this.login.login.role == null && this.userId == null) {
      this.register();
    }
  }

}


 
