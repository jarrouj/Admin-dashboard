import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product/products.service';
import { Order, OrdersService } from './orders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class OrderComponent  implements OnInit {

  orders: Order[] = [];

  constructor(private ordersService: OrdersService, private productService: ProductsService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

  updateStatus(orderId: number, status: string) {
    this.ordersService.updateOrderStatus(orderId, status);
    this.orders = this.ordersService.getOrders();
  }

  deleteOrder(orderId: number) {
    this.ordersService.deleteOrder(orderId);
    this.orders = this.ordersService.getOrders();
  }

}
