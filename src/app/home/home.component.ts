import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../product/products.service';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../login/service/service.service';
import { OrdersService } from '../order/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  totalUsers: number = 0;
  totalOrders: number = 0;
  orders: any[] = [];

  constructor(
    private productService: ProductsService,
    private serviceService: ServiceService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.totalUsers = this.serviceService.getUsersCount();
    this.totalOrders = this.ordersService.getOrdersCount();
    this.orders = this.ordersService.getOrders();
  }

  calculateTotal(product: Product): number {
    return product.price * product.quantity;
  }

  calculateOrderTotal(order: any): number {
    return order.TotalPrice;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find(product => product.id === productId);
  }
}
