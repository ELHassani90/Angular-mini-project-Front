import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient : HttpClient) { }


  // to get all Ordesr in the database
  getArticles(){
    return this.httpclient.get("http://localhost:8080/api/orders");
  }


  // to get All odrers numbers in the database
  getArticlesNumber(){
    return this.httpclient.get("http://localhost:8080/api/ordersCount");
  }
}
