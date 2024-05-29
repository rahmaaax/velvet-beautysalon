import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductListComponent } from './pages/Mproduct.list.page/product.list.page.component';
import { SaleComponent } from './sale/sale.component';
import { SignupComponent } from './signup/signup.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SigninComponent } from './signin/signin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SkProductListComponent } from './sk-product.list/sk-product.list.component';
import { MainProductsComponent } from './main-products/main-products.component';
import { NailsComponent } from './nails/nails.component';
import { FacialComponent } from './facial/facial.component';
import { HairComponent } from './hair/hair.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'Signup',
    component: SignupComponent
  },
  {
    path: 'aboutus',
    component: AboutPageComponent
  },

  {
    path: 'Signin',
    component: SigninComponent
  },
  { path: 'product/:id', 
  component: ProductDetailsComponent 
},
{
  path: 'skinProducts',
  component: SkProductListComponent
},
{
  path: 'MainProducts',
  component: MainProductsComponent
},
{
  path: 'Nails',
  component: NailsComponent
},
{
  path: 'Facial',
  component: FacialComponent
},
{
  path: 'Hair',
  component: HairComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
