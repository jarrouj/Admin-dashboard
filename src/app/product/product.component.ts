import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule   ],
})
export class ProductComponent implements OnInit {
  isDropdownOpen = false;  // For Add Product form visibility
  isEditMode = false;      // For Edit Product form visibility
  editingProduct: Product | null = null;  // To store the product being edited

  productName: string = '';
  description: string = '';
  image: string = '';
  quantity: number | null = null;
  price: number | null = null;

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();  // Fetch products when the component initializes
  }

  toggleDropdown() {
    console.log("Dropdown toggled");
    this.isDropdownOpen = !this.isDropdownOpen;  // Toggle the visibility of the Add Product form
  }

  submitProduct() {
    if (this.productName && this.description && this.image && this.quantity && this.price) {
      if (this.isEditMode && this.editingProduct) {
        // Update the product
        const updatedProduct: Product = {
          id: this.editingProduct.id, 
          name: this.productName,
          description: this.description,
          image: this.image,
          quantity: this.quantity!,
          price: this.price!,
        };
        this.productService.updateProduct(updatedProduct);
        this.isEditMode = false;
      } else {
        // Add new product
        const newProduct: Product = {
          id: this.products.length + 1,
          name: this.productName,
          description: this.description,
          image: this.image,
          quantity: this.quantity!,
          price: this.price!,
        };
        this.productService.addProduct(newProduct);
      }
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
    this.editingProduct = null;
  }

  editProduct(product: Product) {
    this.isEditMode = true;
    this.editingProduct = product;

    this.productName = product.name;
    this.description = product.description;
    this.image = product.image;
    this.quantity = product.quantity;
    this.price = product.price;

    this.isDropdownOpen = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  confirmDelete(productId: number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    if (isConfirmed) {
      this.deleteProduct(productId);
    }
  }

}
