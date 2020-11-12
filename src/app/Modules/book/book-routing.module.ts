import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from 'src/app/Components/add-book/add-book.component';
import { EditViewComponent } from 'src/app/Components/edit-view/edit-view.component';
import { MyBooksComponent } from 'src/app/Components/my-books/my-books.component';
import { UserViewBooksComponent } from 'src/app/Components/user-view-books/user-view-books.component';
import { ViewBooksComponent } from 'src/app/Components/view-books/view-books.component';

const routes: Routes = [
  {path:"addBook",component:AddBookComponent},
  {path:"editView/:id",component:EditViewComponent},
  {path:"ViewBooks",component:ViewBooksComponent},
  {path:"userViewBooks",component:UserViewBooksComponent},
  {path:"mybooks",component:MyBooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
