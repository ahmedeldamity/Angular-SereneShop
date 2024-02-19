import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private _ShopService:ShopService, private _ActivatedRoute:ActivatedRoute){}

  product?:Product;

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    let id = this._ActivatedRoute.snapshot.paramMap.get('id');
    if(id)
      this._ShopService.getProduct(+id).subscribe({
        next: (response) => {
          this.product = response;
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

}
