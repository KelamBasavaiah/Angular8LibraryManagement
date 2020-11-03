import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMgmtComponent } from 'src/app/Components/user-mgmt/user-mgmt.component';

const routes: Routes = [
  {path:"usermgmt",component:UserMgmtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMgmtRoutingModule { }
