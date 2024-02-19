import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  constructor(private _ShopService:ShopService){}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._ShopService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
