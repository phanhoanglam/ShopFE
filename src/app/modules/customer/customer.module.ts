import { TreeMenuComponent } from './../../shared/Directives/tree-menu/tree-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollToTopComponent } from 'src/app/shared/Directives/ScrollToTop/scroll-to-top.component';
import { ProductComponent } from './product/product.component';
import { MatSliderModule } from '@angular/material/slider';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    CustomerComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ScrollToTopComponent,
    TreeMenuComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatSliderModule,
    MatTabsModule
  ]
})
export class CustomerModule { }
