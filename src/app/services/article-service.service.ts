import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  url = 'http://localhost:8080/api/Allarticles'

  constructor(private httpclient : HttpClient) { }

  getArticles(){
    return this.httpclient.get("http://localhost:8080/api/Allarticles");
  }

  saveArticle(data: any){
    return this.httpclient.post(this.url, data);
  }
}
