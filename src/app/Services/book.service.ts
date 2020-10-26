import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../Entities/book-details';
import { User } from '../Entities/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 public books:BookDetails[]=[];
 public prefix:string="https://localhost:44328/Book/";

  constructor(private http:HttpClient) {}
  
  getAllBooks()
  { 
    return this.http.get(this.prefix+"GetAllBooks")
    
  }

  getBook(id){
    return this.http.get(this.prefix+"GetBook?id="+id)    
  }

  deleteBookById(id){
   return this.http.delete(this.prefix+"deleteBook?id="+id)
  }
  let:Boolean = false;
  updateArray(id,UpdatedArray:BookDetails){
    return this.http.put(this.prefix+"updateBook?id="+id,UpdatedArray)
  }

  addBook(book:BookDetails){
    return this.http.post(this.prefix+"addBook",book);
  }

  lendingBook(bookId:string,user:User){
    return this.http.post("https://localhost:44328/User/lendBook?bookid="+bookId,user);
  }

}
