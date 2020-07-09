import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CustomerComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent
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
    MatSelectModule
  ]
})
export class CustomerModule { }
