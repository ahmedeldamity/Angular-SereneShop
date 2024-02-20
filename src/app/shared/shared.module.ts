import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports: [
    PaginationModule,
    FormsModule,
    PaginationComponent
  ]
})
export class SharedModule { }
