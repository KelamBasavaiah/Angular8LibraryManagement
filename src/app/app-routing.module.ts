import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { AddBookDetailsComponent } from './Components/add-book-details/add-book-details.component';


const routes: Routes = [
  {path:"ViewBooks",component:ViewBooksComponent},
  {path:"addBooks",component:AddBookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
