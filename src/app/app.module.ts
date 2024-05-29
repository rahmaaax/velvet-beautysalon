import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/Mproduct.list.page/product.list.page.component';
import { SaleComponent } from './sale/sale.component';
import { CartService } from 'src/app/services/cart-service.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignupComponent } from './signup/signup.component';
import { EqualCardHeightDirective } from 'src/app/pages/Mproduct.list.page/EqualCardHeightDirective';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SkProductListComponent } from './sk-product.list/sk-product.list.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { NailsComponent } from './nails/nails.component';
import { FacialComponent } from './facial/facial.component';
import { HairComponent } from './hair/hair.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SaleComponent,
    LandingPageComponent,
    AboutPageComponent,
    SignupComponent,
    EqualCardHeightDirective,
    SigninComponent,
    ProductDetailsComponent,
    SkProductListComponent,
    MainProductsComponent,
    NailsComponent,
    FacialComponent,
    HairComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SaleComponent, CartService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
