import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/user';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  userName:string = '';
  userBooks:User[]=[];

  constructor() { }

  getBooksforUser(userName){

  }

  ngOnInit() {
    this.getBooksforUser(this.userName)
  }

}
