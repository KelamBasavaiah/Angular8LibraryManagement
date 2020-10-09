import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../Entities/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 public books:BookDetails[]=[];

  constructor(private http:HttpClient) {}
  
  getAllBooks()
  { 
    return this.http.get("https://localhost:44328/api/Book")
    
  }

  getBook(id){
    return this.http.get("https://localhost:44328/api/Book/"+id)    
  }

  deleteBookById(id){
   return this.http.delete("https://localhost:44328/api/Book/"+id)
  }
  let:Boolean = false;
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
        return this.let = true;
      }
    }
    return this.let;
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
