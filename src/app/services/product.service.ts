import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Product } from 'src/app/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/api/products.json'; 
  cartAddedSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}
  private cart: Product[] = [];

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); 
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getAllProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === id))
    );
  }


  addToCart(product: Product): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }

  removeCartItemById(id: number): Observable<any> {
    const index = this.cart.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }

    return of({ result: true });
  }

  getCartItems(): Product[] {
    return this.cart;
  }


  makeSale(order: Product[]): Observable<any> {
    console.log('Order placed:', order);

    this.cart = [];

    return of({ success: true }); 
  }
}
