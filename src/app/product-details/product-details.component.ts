import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  cartItemCount: number = 0;


  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(
      (product: Product | undefined) => {
        if (product) { // Check if product is defined
          this.product = product;
        }
      }
    );
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
