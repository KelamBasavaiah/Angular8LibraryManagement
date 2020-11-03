import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/Services/login.service';
import { ConfirmPassword } from './confirm-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  submitted = false;
  userId:number = 5;

  constructor(private formBuilder: FormBuilder,private toastr:ToastrService,private loginService:LoginService) {}

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
    this.loginService.changePassword(this.userId,this.changePasswordForm.value.oldpassword
      ,this.changePasswordForm.value.password).subscribe((data:any)=>{
        if(data){
          this.toastr.success('Password Changed Successfully!', 'Success!');
        }else{
          this.toastr.warning('Old Password wrong !', 'Check & Update!');
        }
      });

  }

}
