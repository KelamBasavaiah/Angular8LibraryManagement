import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditViewComponent } from './Components/edit-view/edit-view.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyBooksComponent } from './Components/my-books/my-books.component';
import { UserViewBooksComponent } from './Components/user-view-books/user-view-books.component';
import { UserComponent } from './Components/user/user.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { LoginService } from './Services/login.service';


const routes: Routes = [
  {path:"Admin",component:AdminComponent ,canActivate:[LoginService],
children:[
  {path:"ViewBooks",component:ViewBooksComponent,canActivate:[LoginService]},
  {path:"home",component:HomeComponent,canActivate:[LoginService]},
  {path:"addBook",component:AddBookComponent,canActivate:[LoginService]},
  {path:"editView/:id",component:EditViewComponent,canActivate:[LoginService]}
]},
{path:"login",component:LoginComponent},
{path:'', component:LoginComponent},
{path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
