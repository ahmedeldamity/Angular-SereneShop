import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _BasketService:BasketService){}
  title = 'SereneShop';

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    basketId && this._BasketService.getBasket(basketId);
  }

}
