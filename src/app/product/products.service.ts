import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'A great product',
      image: 'https://via.placeholder.com/150',
      quantity: 10,
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another great product',
      image: 'https://via.placeholder.com/150',
      quantity: 15,
      price: 200,
    },
  ];

  constructor() {}

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Add a product
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Update product
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((product) => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Delete product
  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
