import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from 'src/app/Components/add-book/add-book.component';
import { EditViewComponent } from 'src/app/Components/edit-view/edit-view.component';

const routes: Routes = [
  {path:"addBook",component:AddBookComponent},
  {path:"editView/:id",component:EditViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
