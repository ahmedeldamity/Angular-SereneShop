import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { Product } from '../shared/interfaces/product';
import { Brand } from '../shared/interfaces/brand';
import { Category } from '../shared/interfaces/category';
import { shopParams } from '../shared/interfaces/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  constructor(private _ShopService:ShopService){}

  @ViewChild('search') searchTerm?:ElementRef;
  products: Product[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  shopParams = new shopParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to high', value: 'price'},
    {name: 'Price: High to low', value: 'priceDesc'},
  ];

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getCategories();
  }

  getProducts(){
    this._ShopService.getProducts(this.shopParams).subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getBrands(){
    this._ShopService.getBrands().subscribe({
      next: (response) => {
        this.brands = [{id: 0, name: 'All'}, ...response]
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCategories(){
    this._ShopService.getCategories().subscribe({
      next: (response) => {
        this.categories = [{id: 0, name: 'All'}, ...response];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onBrandSelected(brandId: number){
    this.shopParams.brandId = brandId;
    this.shopParams.pageIndex = 1;
    this.getProducts();
  }

  onCategorySelected(categoryId: number){
    this.shopParams.categoryId = categoryId;
    this.shopParams.pageIndex = 1;
    this.getProducts();
  }

  onSortSelected(event: any){
    console.log(event);
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onSearch(){
    if(this.searchTerm && this.searchTerm?.nativeElement.value.trim())
    {
      this.shopParams.search = this.searchTerm?.nativeElement.value.trim();
      this.shopParams.pageIndex = 1;
      this.getProducts();
    }
  }

  onReset(){
    if(this.searchTerm)
      this.searchTerm.nativeElement.value = '';
    this.shopParams = new shopParams();
    this.getProducts();
  }

}
