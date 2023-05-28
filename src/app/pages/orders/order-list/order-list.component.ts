import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/modals/order';
import { OrdersListService } from 'src/app/services/orders-list/orders-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: IOrder[];
  cols = [
    {field: 'age', header: 'Age'},
    {field: 'birthDay', header: 'Birth day'},
    {field: 'cardNumber', header: 'Card number'},
    {field: 'tourId', header: 'Tour ID'},
    {field: 'userId', header: 'User ID'}
  ]
  constructor(private ordersListService:OrdersListService) { }

  ngOnInit(): void {
    this.ordersListService.getOrderList().subscribe((data)=>{
      this.orders = data;
    })
  }

}
