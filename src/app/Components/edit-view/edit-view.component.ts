import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetails } from '../../Entities/book-details';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

  constructor(private bookServices:BookService,private myActiveRoute:ActivatedRoute,private fb:FormBuilder,private router: Router,private toastr:ToastrService) { 
  
  }

  book = new BookDetails();
  books = new BookDetails();

  submitted=false;
  EditForm = this.fb.group({
  Id:['',Validators.required],
  BookName:['',[Validators.required]],
  AuthorName:['',[Validators.required,Validators.minLength(8)]],
  Edition:['',[Validators.required,Validators.min(0)]],
  Price:['',[Validators.required,Validators.min(1)]],
  publishedDate:['',[Validators.required]],
  Contact:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  Publisher:['',[Validators.required]],
  Copies:['',[Validators.required,Validators.min(1)]],
  Genres:['',[Validators.required]]
})
get validationControl() {
   return this.EditForm.controls; 
  }

  formSubmit()
  {
    this.submitted=true;
    if (this.EditForm.invalid) {
      this.toastr.warning('Something went wrong...','Check & Update!!!')
      return;
    }
    console.log(this.EditForm.value);
    
    if(this.bookServices.updateArray(this.EditForm.value)){
      this.toastr.success('Book Updated!', 'Success!');
    }else{
      this.toastr.warning('something went wrong!', 'Failed!');
    }
    this.router.navigate(["ViewBooks"]);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  getEditData(){
    this.bookServices.getBook(this.book.id).subscribe((data:BookDetails)=>
    {
      this.books=data
    });  
    console.log(this.books);
  }

  ngOnInit() : void {
    this.myActiveRoute.params.subscribe(res=>
      {
        this.book.id = res["id"];
    });
    console.log(this.book.id);
    this.getEditData()
  }

}
