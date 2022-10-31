import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atoz mini projet';
  loged = false;
  ordersNumber :any;

  constructor(public orderService : OrderService) { }

  togelfunction(){
    //this will work propperly if we checked local storage for Authontoficated User
    this.loged = !this.loged;
  }
  ngOnInit(): void {
    console.log("**********************************************************************************" +this.ordersNumber);
    this.ordersNumber = this.orderService.getArticlesNumber().subscribe(data => {console.log(data)});
    console.log("*********************** : " +this.ordersNumber);
  }
}
