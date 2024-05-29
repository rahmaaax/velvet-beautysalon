import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = []; 
  private cartItemCountSubject = new BehaviorSubject<number>(0); 

  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor() {}

  public updateCartItemCount(calculatedItemCount: number = this.cartItems.length): void {
    this.cartItemCountSubject.next(calculatedItemCount);
  }

  addToCart(product: Product): void {
   
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }

    this.updateCartItemCount();
  }

removeCartItemById(productId: number): boolean {
  const index = this.cartItems.findIndex(item => item.id === productId);

  if (index !== -1) {
    this.cartItems.splice(index, 1);
    this.updateCartItemCount();
    return true; 
  }

  return false; 
}


  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartItemCount();
  }

  
}
