import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, PreloadingStrategy } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { LoginService } from './Services/login.service';


const routes: Routes = [
  {path:"main",component:MainComponent,canActivate:[LoginService],
  children:[
  {path:"home",component:HomeComponent,canActivate:[LoginService]},
  {path:"confirmPassword",component:ChangePasswordComponent,canActivate:[LoginService]},
  {path:"contact",component:ContactComponent,canActivate:[LoginService]},
  {path:"user",component:UserHomeComponent,canActivate:[LoginService],
       children:[                
        {path:"Books",loadChildren: () => import('./Modules/book/book.module').then(m => m.BookModule),canActivate:[LoginService]},        
   ]},
   {path:"Admin",component:AdminComponent ,canActivate:[LoginService],
         children:[                  
          {path:"Books",loadChildren: () => import('./Modules/book/book.module').then(m => m.BookModule),canActivate:[LoginService]},          
          {path:"",loadChildren: () => import('./Modules/user-mgmt/user-mgmt.module').then(m => m.UserMgmtModule),canActivate:[LoginService]},
          {path:"addUser",component:AddUserComponent,canActivate:[LoginService]},
          {path:"updateUser/:id",component:AddUserComponent,canActivate:[LoginService]}
    ]},
]},

{path:"Register",component:AddUserComponent},
{path:"login",component:LoginComponent},
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
