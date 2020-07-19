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
          path: 'category', component: ProductComponent, children: [
            { path: 'product-detail', component: ProductDetailComponent }
          ]
        },
        { path: 'about', component: AboutComponent },
      ]
    }]),
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
