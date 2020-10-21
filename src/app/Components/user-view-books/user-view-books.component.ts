import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from 'src/app/Entities/book-details';
import { User } from 'src/app/Entities/user';
import { BookService } from 'src/app/Services/book.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-view-books',
  templateUrl: './user-view-books.component.html',
  styleUrls: ['./user-view-books.component.css']
})
export class UserViewBooksComponent implements OnInit {

  books:BookDetails[]=[];
  book:BookDetails;
  user:User;
  le:number;
  asending:boolean=false;decending:boolean=true;
  public searchString:string="";
  
  constructor(private bookServices:BookService,private router: Router,private toastr:ToastrService,private loginservice:LoginService) { 
    this.user=new User();
  }
  getAllBooks(){
    this.bookServices.getAllBooks().subscribe((data:any[])=>{this.books=data});      
  }
 
  search(filters:string)
  {
    this.books=this.books.filter(objfilter);
    function objfilter(book:BookDetails){
      for (const key in book) {
        if(typeof(book[key])=='string'){
          if(book[key].toLocaleLowerCase().indexOf(filters.toLocaleLowerCase())>=0){ return book}      
        }
      }
     }
  }

  sort(column:any)
  {
    if(typeof(this.books[0][column])=="number"){
      this.books=this.books.sort((a,b)=>{return b[column]-a[column]});
      if(this.decending==false){this.books.reverse(); this.decending=true}else{this.decending=false;}
      
    }
    if(typeof(this.books[0][column])=="string"){
      this.books=this.books.sort((a,b)=>{return b[column].toLocaleLowerCase() <a[column].toLocaleLowerCase() ?1:-1});
      if(this.decending==false){this.books.reverse(); this.decending=true}else{this.decending=false;}
    }
    if(typeof(this.books[0][column])=="object"){
      this.books=this.books.sort((a,b)=>{return b[column]<a[column]?1:-1});
      if(this.decending==false){this.books.reverse(); this.decending=true}else{this.decending=false;}
    }
        
  }
  lendingBook(bookId){
    debugger
    this.user.userId=this.loginservice.login.userId;
    this.bookServices.lendingBook(bookId,this.user).subscribe((result)=>{
      if(result===true){
        this.toastr.success('Book is Lended!', 'Success!');
        this.router.navigateByUrl("/main/user/mybooks");
      }
      else{
        this.toastr.warning('Something went wrong!', 'Failed!');
      }
    })
  }

 clearFilters(){
  this.searchString='';
  this.getAllBooks();
  }
ngOnChages(){}
  ngOnInit() {
    this.getAllBooks();
  }

}
