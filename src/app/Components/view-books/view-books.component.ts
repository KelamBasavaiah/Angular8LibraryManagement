import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/Entities/book-details';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
   books:BookDetails[]
  constructor(private bookServices:BookService) { 
    this.books=this.bookServices.getAllBooks();  
  }

  editBook(id:string){console.log(id)}
  
  ngOnInit() {
  }

}
