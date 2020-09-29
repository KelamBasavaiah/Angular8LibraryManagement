import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/Entities/book-details';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
   books:BookDetails[];
  public searchString:string="";
  
  constructor(private bookServices:BookService,private router: Router) { 
    this.books=this.bookServices.getAllBooks();  
  }

  editBook(id:string)
  {
    console.log(id)
    this.router.navigate(["editView", id]);
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
 clearFilters(){
  this.searchString='';
  this.books=this.bookServices.getAllBooks();}

  ngOnInit() {
  }
 
}
