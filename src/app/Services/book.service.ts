import { Injectable } from '@angular/core';
import { BookDetails } from '../Entities/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 public books:BookDetails[]=[{id:'LM001', name:'C#',author_name:'Mari',edition:3,price:200,publisher:'bhargav'
                        ,genres:'Programming',contact:9092660514,publishedDate:new Date(),copies:100},

                       {id:'LM002', name:'SQl',author_name:'bhuvana',edition:2,price:367,publisher:'bhargav'
                        ,genres:'Programming',contact:9092660514,publishedDate:new Date(),copies:200},

                       {id:'LM003', name:'AspDotnet',author_name:'mari',edition:4,price:390,publisher:'basavaiah'
                        ,genres:'Programming',contact:9542554454,publishedDate:new Date(),copies:50},

                        {id:'LM004', name:'javascript',author_name:'bhuvana',edition:5,price:420,publisher:'basavaiah'
                         ,genres:'Programming',contact:9542554454,publishedDate:new Date(),copies:20}                                            
                      ];

  constructor() { }
  
  getAllBooks():BookDetails[]
  { 
    console.log(this.books) ;
    return this.books
  }

  getBook(id){
    return this.books.find(x=>x.id === id)
  }

}
