import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { BookService } from 'src/app/Services/book.service';
import { BookDetails } from 'src/app/Entities/book-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
books:BookDetails[]=[];
  constructor(private bookServices:BookService) { }

  current = 0;
  img_list = [
    'assets/image/cursole/c1.jpg',
    'assets/image/cursole/c2.jpg',
    'assets/image/cursole/bitcoin.jpg',
    'assets/image/cursole/csharp.jpg',
    'assets/image/cursole/asp.jpg',
    'assets/image/cursole/SQL.jpg'
  ];

  getAllBooks(){
    this.bookServices.getAllBooks().subscribe((data:any[])=>{this.books=data});      
  }

  ngOnInit() {
    this.getAllBooks();
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 3000);
  }
}
