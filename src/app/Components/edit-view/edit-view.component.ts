import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/Entities/book-details';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

  constructor(private bookServices:BookService,private myActiveRoute:ActivatedRoute,private fb:FormBuilder) { 
  
  }

  book = new BookDetails();
  books = new BookDetails();

  submitted=false;
  EditForm = this.fb.group({
  Id:['',Validators.required],
  BookName:['',[Validators.required]],
  AuthorName:['',[Validators.required,Validators.minLength(8)]],
  Edition:['',[Validators.required]],
  Price:['',[Validators.required]],
  publishedDate:['',[Validators.required]]
  
})
get f() {
   return this.EditForm.controls; 
  }

  formSubmit(){
    this.submitted=true;
    if (this.EditForm.invalid) {
      return;
  }
console.log(this.EditForm);

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  GetEditData(){
    this.books = this.bookServices.getBook(this.book.id);
    console.log(this.books);
  }

  ngOnInit() : void {
    this.myActiveRoute.params.subscribe(res=>
      {
        this.book.id = res["id"];
    });
    console.log(this.book.id);
    this.GetEditData()
  }

}
