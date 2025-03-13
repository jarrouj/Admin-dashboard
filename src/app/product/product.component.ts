import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [FormsModule, CommonModule],
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
          id: this.editingProduct.id,  // Keep the same ID
          name: this.productName,
          description: this.description,
          image: this.image,
          quantity: this.quantity!,
          price: this.price!,
        };
        this.productService.updateProduct(updatedProduct);
        this.isEditMode = false;  // Switch off edit mode
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
      this.products = this.productService.getProducts();  // Refresh the list
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
    this.isEditMode = true;  // Switch to edit mode
    this.editingProduct = product;  // Store the product being edited

    // Populate the form with the existing product details
    this.productName = product.name;
    this.description = product.description;
    this.image = product.image;
    this.quantity = product.quantity;
    this.price = product.price;

    // Open the dropdown form in edit mode
    this.isDropdownOpen = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();  // Refresh the list
  }
}
