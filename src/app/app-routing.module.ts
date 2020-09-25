import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBooksComponent } from './Components/view-books/view-books.component';


const routes: Routes = [
  {path:"ViewBooks",component:ViewBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
