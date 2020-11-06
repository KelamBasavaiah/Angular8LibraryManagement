import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/Services/login.service';
import { ConfirmPassword } from './confirm-password.validator';
import { User } from 'src/app/Entities/user';
import { UserMgmtService } from 'src/app/Services/user-mgmt.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  submitted = false;
  userDetails = new User();

  constructor(private formBuilder: FormBuilder,private toastr:ToastrService,private loginService:LoginService,private route:Router,private userMgmtService:UserMgmtService) {}

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group(
      {
        oldpassword:["", [Validators.required, Validators.minLength(8)]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: ConfirmPassword("password", "confirmPassword")
      }
    );
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }
    this.userDetails.id = this.loginService.login.userId;
    this.userDetails.password = this.changePasswordForm.value.oldpassword;
    this.userDetails.newPassword = this.changePasswordForm.value.password;
    this.userMgmtService.addUser(this.userDetails).subscribe((data:any)=>{
        if(data){
          this.toastr.success('Password Changed Successfully!', 'Success!');
          this.route.navigateByUrl("/main/home");
        }else{
          this.toastr.warning('Something went wrong!..', 'Check & Update!');
        }  
      });

  }

}
