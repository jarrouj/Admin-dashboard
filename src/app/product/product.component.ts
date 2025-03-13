import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [FormsModule , CommonModule],
})
export class ProductComponent implements OnInit {
  isDropdownOpen = false;
  productName: string = '';
  description: string = '';
  image: string = '';
  quantity: number | null = null;
  price: number | null = null;

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleDropdown() {
    console.log("Dropdown toggled");
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  submitProduct() {
    if (this.productName && this.description && this.image && this.quantity && this.price) {
      const newProduct: Product = {
        id: this.products.length + 1,
        name: this.productName,
        description: this.description,
        image: this.image,
        quantity: this.quantity!,
        price: this.price!,
      };
      this.productService.addProduct(newProduct);
      this.products = this.productService.getProducts();
      this.clearForm();
      this.toggleDropdown();
    } else {
      console.log('Please fill all fields');
    }
  }

  clearForm() {
    this.productName = '';
    this.description = '';
    this.image = '';
    this.quantity = null;
    this.price = null;
  }

  editProduct(product: Product) {
    this.productName = product.name;
    this.description = product.description;
    this.image = product.image;
    this.quantity = product.quantity;
    this.price = product.price;
    this.productService.deleteProduct(product.id);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}



