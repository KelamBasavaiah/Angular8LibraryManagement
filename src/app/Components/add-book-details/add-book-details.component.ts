import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/Entities/book-details';

@Component({
  selector: 'app-add-book-details',
  templateUrl: './add-book-details.component.html',
  styleUrls: ['./add-book-details.component.css']
})
export class AddBookDetailsComponent implements OnInit {
  book:BookDetails;
  constructor() { 
    this.book=new BookDetails();
  }

  ngOnInit() {
  }

}
