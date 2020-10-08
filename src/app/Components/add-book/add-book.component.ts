import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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


  constructor(private bookService:BookService,private router:Router,private toastr:ToastrService) { 

    this.book=new BookDetails();
  }
  insertBook(){
    debugger
    console.log(this.book);
    this.bookService.addBook(this.book).subscribe(res=>{
      console.log(res);
      if(res==true)
      {
        this.toastr.success('Book Added!', 'Success!');
        this.router.navigateByUrl("/ViewBooks");
      }
      else
        this.toastr.warning('Something went wrong!', 'Failed!');
    })
    
  }

  ngOnInit() {
  }

}
