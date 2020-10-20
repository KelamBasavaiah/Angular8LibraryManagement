import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private loginService:LoginService,private toastr:ToastrService) { }

  getBooksforUser(userName){
    this.loginService.getBooksforUser(userName).subscribe((data:any[])=>{this.userBooks=data});  
  }

  returnBook(book){
    console.log(book);
    this.loginService.returnBook(book).subscribe((data:any)=>{
      if(data){
        this.toastr.success('Book Returned Successfully!', 'Success!');
      }else{
        this.toastr.warning('something went wrong!', 'Failed!');
      }
    })
  }

  ngOnInit() {
    this.getBooksforUser(this.userName)
  }

}
