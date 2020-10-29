import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Entities/user';
import { UserMgmtService } from 'src/app/Services/user-mgmt.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private toastr:ToastrService,private userMgmtService:UserMgmtService,private myActiveRoute:ActivatedRoute) {
    this.changeRoleToName();
   }

  userDetails = new User();
  userId:any = null;
  rolename:any;
  nameOfPage:any = 'Add User';
  nameOfButton:any = 'Add';

  submitted=false;
  AddForm = this.fb.group({
  username:['',[Validators.required]],
  password:['',[Validators.required,Validators.minLength(8)]],
  phoneno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  mailid:['',[Validators.required,Validators.pattern('^.+@gmail.com$')]],
  role:['',[Validators.required]]
})
get validationControl() {
  return this.AddForm.controls; 
 }

 formSubmit()
 {
   this.submitted=true;
   debugger;
   if (this.AddForm.invalid) {
     this.toastr.warning('Something went wrong...','Check & Update!!!')
     return;
   }
   console.log(this.AddForm.value);
   console.log(this.userDetails);
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
 }

 getUser(){
  console.log(this.userId);
  this.userMgmtService.getUser(this.userId).subscribe((data:User)=>
  {
    this.userDetails=data
    console.log(data);
    this.changeRoleToName();
    this.changePageName();
  }); 
 }

 changeRoleToName(){
   console.log(this.userDetails.role);
  if(this.userDetails.role == 0){
    this.rolename = 'AdminUser';
  }else if(this.userDetails.role == 1){
    this.rolename = 'Admin'
  }else if(this.userDetails.role == 2){
    this.rolename = 'User';
  } else{
    this.rolename = 'Select';
  }
 }

 changePageName(){
   this.nameOfPage = 'Update User';
   this.nameOfButton = 'Update';
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
  }

}
