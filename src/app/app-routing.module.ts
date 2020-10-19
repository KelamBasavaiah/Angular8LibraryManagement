import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditViewComponent } from './Components/edit-view/edit-view.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';


const routes: Routes = [
  {path:"Admin",component:AdminComponent,
children:[
  {path:"ViewBooks",component:ViewBooksComponent},
  {path:"home",component:HomeComponent},
  {path:"addBook",component:AddBookComponent},
  {path:"editView/:id",component:EditViewComponent}
]},
  
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
