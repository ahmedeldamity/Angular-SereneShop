import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/interfaces/pagination';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = 'https://localhost:5001/api/';


  getProducts(){

    return this._HttpClient.get<Pagination<Product>>(this.baseUrl + 'product');
  }

}
