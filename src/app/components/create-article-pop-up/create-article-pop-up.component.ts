import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-create-article-pop-up',
  templateUrl: './create-article-pop-up.component.html',
  styleUrls: ['./create-article-pop-up.component.css']
})
export class CreateArticlePopUpComponent implements OnInit {
   article : any;
  constructor(private articleservice : ArticleServiceService) { 
  }

  ngOnInit(): void {
  }

  getArticleForm(data : any){
    console.log(data);
    this.articleservice.saveArticle(data).subscribe((data)=> console.warn());
  }

}
