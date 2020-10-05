import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from '../../Entities/book-details';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:BookDetails;
  result:string;
  constructor(private bookService:BookService,private toastr:ToastrService) { 
    this.book=new BookDetails();
  }
  insertBook(){
    debugger
    console.log(this.book);
    if(this.bookService.addBook(this.book)){
      // this.result="Book added";
      this.toastr.success('Book Added!', 'Success!');
    }
    else
      // this.result="some error ";
      this.toastr.warning('Something went wrong!', 'Failed!');
  }

  ngOnInit() {
  }

}
