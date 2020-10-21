import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from '../../Entities/book-details';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
   books:BookDetails[]=[];
   book:BookDetails;
   le:number;
   asending:boolean=false;decending:boolean=true;
  public searchString:string="";
  
  constructor(private bookServices:BookService,private router: Router,private toastr:ToastrService) { 
    
  }
  getAllBooks(){
    this.bookServices.getAllBooks().subscribe((data:any[])=>{this.books=data});      
  }
  editBook(id:string)
  {
    this.router.navigate(["/main/Admin/editView", id]);
  }
   deleteBook(id)
  {
    if(confirm('Are sure delete this book '+ id+" ?"))
    {
       this.bookServices.deleteBookById(id).subscribe((data:any)=>{
        if(data){this.toastr.success('Book Deleted!', 'Success!');}
        else{this.toastr.warning('Something went wrong!', 'Failed!');}
         this.getAllBooks()
        });
       
    }
    
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
 clearFilters(){
  this.searchString='';
  this.getAllBooks();
  }
ngOnChages(){}
  ngOnInit() {
    this.getAllBooks();
  }
 
}
