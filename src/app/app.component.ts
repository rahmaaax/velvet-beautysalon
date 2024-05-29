import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart-service.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  cartItemCount$ = this.cartService.cartItemCount$;
  title = 'test-project';

  ngOnInit(): void {
    // Removed navigation to '/SignupFirst'
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && typeof event.url === 'string') {
        // Add any specific navigation logic if needed
        if (event.url === '/products') {
          // Handle navigation to products page if needed
        }
      }
    });

    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });

    this.updateCartItemCount();
    this.productService.cartAddedSubject.subscribe(() => {
      this.updateCartItemCount();
    });
  }

  updateCartItemCount() {
    const cartItems = this.productService.getCartItems();
    this.cartItemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
