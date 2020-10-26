import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditViewComponent } from './Components/edit-view/edit-view.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { MyBooksComponent } from './Components/my-books/my-books.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { UserViewBooksComponent } from './Components/user-view-books/user-view-books.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { LoginService } from './Services/login.service';


const routes: Routes = [
  {path:"main",component:MainComponent,canActivate:[LoginService],
  children:[
  {path:"home",component:HomeComponent,canActivate:[LoginService]},
  {path:"user",component:UserHomeComponent,canActivate:[LoginService],
       children:[
        {path:"mybooks",component:MyBooksComponent,canActivate:[LoginService]},
        {path:"userViewBooks",component:UserViewBooksComponent,canActivate:[LoginService]}
   ]},
   {path:"Admin",component:AdminComponent ,canActivate:[LoginService],
         children:[
          {path:"ViewBooks",component:ViewBooksComponent,canActivate:[LoginService]},
          {path:"home",component:HomeComponent,canActivate:[LoginService]},
          {path:"addBook",component:AddBookComponent,canActivate:[LoginService]},
          {path:"editView/:id",component:EditViewComponent,canActivate:[LoginService]},
          {path:"addUser",component:AddUserComponent},
          {path:"updateUser/:id",component:AddUserComponent}
    ]},
]},

 
{path:"login",component:LoginComponent},
{path:"mybooks",component:MyBooksComponent},
{path:"addUser",component:AddUserComponent},
{path:"userViewBooks",component:UserViewBooksComponent},
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
