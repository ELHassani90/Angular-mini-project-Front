import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public orderService : OrderService) { }
  orderList : any;
  ngOnInit(): void {
    this.orderService.getArticles().subscribe(data => {this.orderList = data});
  }

}
