import { Injectable } from '@angular/core';

export interface Order {
  id: number;
  ProductsId: number;
  quantity: number;
  TotalPrice: number;
  CustomerName: string;
  CustomerEmail: string;
  Status: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orders: Order[] = [
    {
      id: 1,
      ProductsId: 1,
      quantity: 10,
      TotalPrice: 1000,
      CustomerName: 'John Doe',
      CustomerEmail: 'johndoe@example.com',
      Status: 'Pending',
    },
    {
      id: 2,
      ProductsId: 2,
      quantity: 5,
      TotalPrice: 1000,
      CustomerName: 'Jane Smith',
      CustomerEmail: 'janesmith@example.com',
      Status: 'Shipped',
    }
  ];

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  updateOrderStatus(id: number, status: string): void {
    const order = this.getOrderById(id);
    if (order) {
      order.Status = status;
    }
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter(order => order.id !== id);
  }
  getOrdersCount(): number {
    return this.orders.length;
  }

}
