import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from '../Entities/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 public books:BookDetails[]=[];

  constructor(private http:HttpClient) {}
  
  getAllBooks():BookDetails[]
  { 
    this.http.get("https://localhost:44328/api/Book").subscribe((data: any[])=>{
      console.log(data);
      this.books = data;
    })  
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
