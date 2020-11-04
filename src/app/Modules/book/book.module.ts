import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from 'src/app/Components/add-book/add-book.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditViewComponent } from 'src/app/Components/edit-view/edit-view.component';


@NgModule({
  declarations: [AddBookComponent,EditViewComponent],
  imports: [
    CommonModule,
    BookRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule
   
  ]
})
export class BookModule { }
