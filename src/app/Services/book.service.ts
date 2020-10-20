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
  updateArray(id,UpdatedArray:BookDetails){
    return this.http.put("https://localhost:44328/api/Book/"+id,UpdatedArray)
  }

  addBook(book:BookDetails){
    return this.http.post("https://localhost:44328/api/Book",book);
  }

  lendingBook(bookId:string,user:User){
    return this.http.post("https://localhost:44328/api/User?bookid="+bookId,user);
  }

}
