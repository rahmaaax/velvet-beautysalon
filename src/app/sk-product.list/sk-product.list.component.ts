import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart-service.service';
import { Router } from '@angular/router';  // Ensure this import is added

@Component({
  selector: 'app-sk-product.list',
  templateUrl: './sk-product.list.component.html',
  styleUrls: ['./sk-product.list.component.css']
})
export class SkProductListComponent implements OnInit {
  productList: Product[] = [];
  cartItemCount: number = 0;

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log('Product data:', data);
        this.productList = data.slice(12, 24); // Limit to first 12 products
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  addItemToCart(product: Product): void {
    console.log('added to cart');
    product.addedToCart = true;
    product.quantity = 1;
    this.cartService.addToCart(product);
    this.cartItemCount = this.cartService.getCartItems().length;
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  }
}
