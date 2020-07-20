import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumericDirective } from 'src/app/shared/Directives/Numeric/numeric.directive';
import { ScrollToTopComponent } from 'src/app/shared/Directives/ScrollToTop/scroll-to-top.component';
import { SlideCarouselComponent } from 'src/app/shared/Directives/slide-carousel/slide-carousel.component';
import { TreeMenuMobileComponent } from 'src/app/shared/Directives/tree-menu-mobile/tree-menu-mobile.component';
import { SharedModuleModule } from 'src/app/shared/share-module/shared-module/shared-module.module';
import { TreeMenuComponent } from './../../shared/Directives/tree-menu/tree-menu.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { DiscountPopupComponent } from './cart/discount-popup/discount-popup.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ScrollToTopComponent,
    ProductComponent,
    ProductDetailComponent,
    NumericDirective,
    SlideCarouselComponent,
    CartComponent,
    DiscountPopupComponent,
    CheckoutComponent,
    TreeMenuMobileComponent,
    TreeMenuComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModuleModule
  ],
  entryComponents: [
    DiscountPopupComponent
  ]
})
export class CustomerModule { }
