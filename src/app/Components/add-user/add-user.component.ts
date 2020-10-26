import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Entities/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  userDetails = new User();

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


  ngOnInit() {
    this.userDetails.role
  }

}
