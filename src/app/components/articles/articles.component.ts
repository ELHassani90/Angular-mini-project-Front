import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public articleService : ArticleServiceService) { }
  articleList : any;

  empty : boolean = true;

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {this.articleList = data});

    if(this.articleList != null)
        this.empty = false;
  }

}
