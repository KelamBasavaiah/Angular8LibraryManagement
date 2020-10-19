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
  id:['',Validators.required],
  name:['',[Validators.required]],
  author_name:['',[Validators.required,Validators.minLength(8)]],
  edition:['',[Validators.required,Validators.min(0)]],
  price:['',[Validators.required,Validators.min(1)]],
  publishedDate:['',[Validators.required]],
  contact:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  publisher:['',[Validators.required]],
  copies:['',[Validators.required,Validators.min(1)]],
  genres:['',[Validators.required]]
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
    debugger;
    this.bookServices.updateArray(this.EditForm.value.id,this.EditForm.value).subscribe((data:any)=>{
      if(data){
        this.toastr.success('Book Updated!', 'Success!');
      }else{
        this.toastr.warning('something went wrong!', 'Failed!');
      }
    })
    this.router.navigate(["/Admin/ViewBooks"]);
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
