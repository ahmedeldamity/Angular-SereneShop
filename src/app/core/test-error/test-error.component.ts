import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {

  baseUrl = environment.apiUrl;

  constructor(private _HttpClient:HttpClient){}

  get404Error(){
    this._HttpClient.get(this.baseUrl + 'product/1000').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get500Error(){
    this._HttpClient.get(this.baseUrl + 'errors/servererror').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get400Error(){
    this._HttpClient.get(this.baseUrl + 'errors/badrequest').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get400ValidationError(){
    this._HttpClient.get(this.baseUrl + 'product/one').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
