import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMgmtRoutingModule } from './user-mgmt-routing.module';
import { UserMgmtComponent } from 'src/app/Components/user-mgmt/user-mgmt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [UserMgmtComponent],
  imports: [
    CommonModule,
    UserMgmtRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule
  ]
})
export class UserMgmtModule { }
