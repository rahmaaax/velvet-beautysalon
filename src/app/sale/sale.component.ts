import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  cartProducts: any[] = [];
  cart: any[] = [];
  subTotal: number = 0;
  cartItemCount: number = 0;
  constructor(private productService: ProductService, private router: Router, private cartService: CartService, private cdr: ChangeDetectorRef) {}

  updateCartItemCount() {
    const calculatedItemCount = this.cartProducts.length;
    this.cartItemCount = this.cartProducts.length;

  }

  ngOnInit(): void {
    this.loadCart();
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
    this.updateCartItemCount();
  }

  loadCart() {
    this.subTotal = 0;
    const cartItems = this.cartService.getCartItems();
    cartItems.forEach(element => {
      this.subTotal += element.price;
    });
    this.cartProducts = cartItems;
  }
  
  
  increaseQuantity(cartItem: any): void {
    cartItem.quantity += 1;
    this.loadCart(); 
  }
  
  decreaseQuantity(cartItem: any): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      this.loadCart(); 
    }
  }
  
  calculateProductTotal(product: Product): number {
    return product.price * product.quantity;
  }

  calculateOrderTotal(): number {
    let orderTotal = 0;
    for (const cartItem of this.cartProducts) {
      orderTotal += this.calculateProductTotal(cartItem);
    }
    return orderTotal;
  }
  

addItemToCart(product: Product): void {
  this.productService.addToCart(product);
  this.cartItemCount = this.productService.getCartItems().length;
}


removeCartItemById(id: number): void {
  console.log('Removing item with ID:', id);

  const removedSuccessfully = this.cartService.removeCartItemById(id);

  if (removedSuccessfully) {
    console.log('Item removed successfully.');
    this.loadCart(); 
    this.cdr.detectChanges(); 
  } else {
    console.error('Item removal failed.');
  }
}


  makeSale() {
    if (this.cartProducts.length === 0) {
      alert("You need to add at least one item to place an order.");
    } else {
      alert("Order succesfully placed! Thank you for shopping at velvet.");
      this.cartService.clearCart();
    }
  }
  

}
