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
import { MatTabsModule } from '@angular/material/tabs';
import { NumericDirective } from 'src/app/shared/Directives/Numeric/numeric.directive';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { SlideCarouselComponent } from 'src/app/shared/Directives/slide-carousel/slide-carousel.component';
import { TreeMenuMobileComponent } from 'src/app/shared/Directives/tree-menu-mobile/tree-menu-mobile.component';

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
    ProductDetailComponent,
    NumericDirective,
    SlideCarouselComponent,
    TreeMenuMobileComponent
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
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    FormsModule,
    OwlModule
  ]
})
export class CustomerModule { }
