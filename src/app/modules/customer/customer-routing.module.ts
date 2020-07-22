import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CustomerComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'trang-chu' },
        { path: 'trang-chu', component: HomeComponent },
        {
          path: 'danh-muc', children: [
            { path: '', component: ProductComponent },
            { path: ':meta-title', component: ProductComponent }
          ]
        },
        {
          path: 'san-pham/:meta-title', component: ProductDetailComponent
        },
        { path: 'about', component: AboutComponent },
        {
          path: 'gio-hang', children: [
            { path: '', component: CartComponent },
            { path: 'thanh-toan', component: CheckoutComponent }
          ]
        },
        { path: '**', component: HomeComponent }
      ]
    }]),
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
