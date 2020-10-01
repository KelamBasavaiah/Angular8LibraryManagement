import { Injectable } from '@angular/core';
import { BookDetails } from '../Entities/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 public books:BookDetails[]=[];

  constructor() 
  {
let data;data=new BookDetails();
data={id:'LM001', name:'C#',author_name:'Mari',edition:3,price:200,publisher:'Microsoft',genres:'Programming',contact:9092660514,publishedDate:'2020-09-11',copies:100}
this.books.push(data);
data={id:'LM002', name:'SQl',author_name:'bhuvana',edition:2,price:367,publisher:'kelam',genres:'Programming',contact:9092660514,publishedDate:'2020-09-01',copies:200}
this.books.push(data);
data ={id:'LM003', name:'AspDotnet',author_name:'mari',edition:4,price:390,publisher:'basavaiah',genres:'Programming',contact:9542554454,publishedDate:'2020-09-30',copies:50}
this.books.push(data);
data={id:'LM004', name:'javascript',author_name:'bhuvana',edition:1,price:420,publisher:'ISO',genres:'Programming',contact:9542554454,publishedDate:'2020-09-22',copies:20} 
this.books.push(data); 
} 
  
  getAllBooks():BookDetails[]
  { 
    return this.books
  }

  getBook(id){
    return this.books.find(x=>x.id === id)    
  }

  deleteBookById(id){
    this.books= this.books.filter(x=>x.id != id?1:0)
    return  this.books
    
  }

  updateArray(UpdatedArray){
    for(var i in this.books){
      if(this.books[i].id == UpdatedArray.Id){
        this.books[i].name = UpdatedArray.BookName;
        this.books[i].author_name = UpdatedArray.AuthorName; 
        this.books[i].publishedDate = UpdatedArray.publishedDate;
        this.books[i].contact = UpdatedArray.Contact;
        this.books[i].edition = UpdatedArray.Edition;
        this.books[i].genres = UpdatedArray.Genres;
        this.books[i].publisher = UpdatedArray.Publisher;
        this.books[i].price = UpdatedArray.Price;
        this.books[i].copies = UpdatedArray.Copies;
        break;
      }
    }
  }

  addBook(book:BookDetails):boolean{
    if(this.books.push(book)){
      return true;
    }
    else{
      return false;
    }
  }

}
