import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { MyBooksComponent } from './Components/my-books/my-books.component';
import { UserViewBooksComponent } from './Components/user-view-books/user-view-books.component';
import { MainComponent } from './Components/main/main.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ContactComponent } from './Components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    HomeComponent,
    
    AdminComponent,
    LoginComponent,
    UserComponent,
    MyBooksComponent,
    UserViewBooksComponent,
    MainComponent,
    UserHomeComponent,
    AddUserComponent,
    ChangePasswordComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),
    CommonModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
