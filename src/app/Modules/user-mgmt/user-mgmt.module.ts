import { NgModule } from '@angular/core';

import { UserMgmtRoutingModule } from './user-mgmt-routing.module';
import { UserMgmtComponent } from 'src/app/Components/user-mgmt/user-mgmt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserMgmtComponent],
  imports: [
    UserMgmtRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule,SharedModule
  ]
})
export class UserMgmtModule { }
