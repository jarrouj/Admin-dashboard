import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product, ProductsService } from '../product/products.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule , CommonModule],
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  calculateTotal(product: Product): number {
    return product.price * product.quantity;
  }
}
