import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { EditViewComponent } from './Components/edit-view/edit-view.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';


const routes: Routes = [
  {path:"ViewBooks",component:ViewBooksComponent},
  {path:"home",component:HomeComponent},
  {path:"addBook",component:AddBookComponent},
  {path:"editView/:id",component:EditViewComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
