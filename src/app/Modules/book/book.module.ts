import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from 'src/app/Components/add-book/add-book.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditViewComponent } from 'src/app/Components/edit-view/edit-view.component';
import { ViewBooksComponent } from 'src/app/Components/view-books/view-books.component';
import { UserViewBooksComponent } from 'src/app/Components/user-view-books/user-view-books.component';
import { MyBooksComponent } from 'src/app/Components/my-books/my-books.component';
import { LoadingSpinnerComponent } from 'src/app/Components/loading-spinner/loading-spinner.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddBookComponent,EditViewComponent,ViewBooksComponent,
    UserViewBooksComponent,MyBooksComponent],
  imports: [
    BookRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule,SharedModule
   
  ]
})
export class BookModule { }
