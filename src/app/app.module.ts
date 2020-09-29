import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { HomeComponent } from './Components/home/home.component';
import { AddBookDetailsComponent } from './Components/add-book-details/add-book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    HomeComponent,
    AddBookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
