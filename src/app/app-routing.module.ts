import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreateArticlePopUpComponent } from './components/create-article-pop-up/create-article-pop-up.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Articles', component: ArticlesComponent},
  {path: 'Orders', component: OrdersComponent},
  {path: 'CreatArticlePopUp', component: CreateArticlePopUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
