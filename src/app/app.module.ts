import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreateArticlePopUpComponent } from './components/create-article-pop-up/create-article-pop-up.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ArticlesComponent,
    CreateArticlePopUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
