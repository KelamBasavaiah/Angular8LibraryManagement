import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { MainComponent } from './Components/main/main.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HighlightCustomDirective } from './Components/main/custom-directive.directive';
import { CapitalizeWordPipe } from './Components/main/capitalize-word.pipe';
import { StructuralDirective } from './Components/main/structural-directive.directive';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { SharedModule } from './Modules/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    AdminComponent,
    LoginComponent,
    UserComponent,
    MainComponent,
    UserHomeComponent,
    AddUserComponent,
    ChangePasswordComponent,
    ContactComponent,
    HighlightCustomDirective,
    CapitalizeWordPipe,
    StructuralDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),
    BrowserAnimationsModule,HttpClientModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
