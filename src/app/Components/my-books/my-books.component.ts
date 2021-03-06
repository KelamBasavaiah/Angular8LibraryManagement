import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Entities/user';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  userId:number = this.loginService.login.userId;
  userBooks:User[]=[];

  constructor(private loginService:LoginService,private toastr:ToastrService,private router:Router) { }

  getBooksforUser(userName){
    this.loginService.getBooksforUser(userName).subscribe((data:any[])=>{this.userBooks=data});  
  }

  returnBook(){
    const selectedBooks= this.userBooks.filter(book => book.checked).map(b =>(b.id));
    if(confirm('Are you sure to return selected books?'))
    {
    this.loginService.returnBook(selectedBooks).subscribe((data:any)=>{
      if(data){
        this.toastr.success('Book Returned Successfully!', 'Success!');
        this.ngOnInit();
      }else{
        this.toastr.warning('something went wrong!', 'Failed!');
      }
    })
  }
  }

  ngOnInit() {
    this.getBooksforUser(this.userId)
  }

}
