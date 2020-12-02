import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from 'src/app/Components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
