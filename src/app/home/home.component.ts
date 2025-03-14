import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../product/products.service';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../login/service/service.service';
import { OrdersService } from '../order/orders.service';
import { Chart, ChartData, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ],
})
export class HomeComponent implements OnInit {
  // chart: any;

  // createChart(): void {
  //   this.chart = new Chart('MyChart', {
  //     type: 'bar', // Chart type
  //     data: {
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
  //       datasets: [
  //         {
  //           label: 'Sales',
  //           data: [467, 576, 572, 79, 92, 574, 573, 576],
  //           backgroundColor: 'blue',
  //         },
  //         {
  //           label: 'Profit',
  //           data: [542, 542, 536, 327, 17, 0.0, 538, 541],
  //           backgroundColor: 'limegreen',
  //         },
  //       ],
  //     },
  //     options: {
  //       aspectRatio: 2.5,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }


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
    // this.createChart();
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
