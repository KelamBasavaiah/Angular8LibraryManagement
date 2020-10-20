import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  userName:string = 'Mari';
  userBooks:User[]=[];

  constructor(private loginService:LoginService) { }

  getBooksforUser(userName){
    this.loginService.getBooksforUser(userName).subscribe((data:any[])=>{this.userBooks=data});  
  }

  retrunBook(book){

  }

  ngOnInit() {
    this.getBooksforUser(this.userName)
  }

}
