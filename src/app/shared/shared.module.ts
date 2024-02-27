import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';


@NgModule({
  declarations: [
    PaginationComponent,
    PaginationHeaderComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports: [
    PaginationModule,
    FormsModule,
    PaginationComponent,
    PaginationHeaderComponent,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
