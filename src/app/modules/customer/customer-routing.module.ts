import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: CustomerComponent,
//     children:{
//       { path: '', pathMatch: 'full', redirectTo: 'profil' },
//     }
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CustomerComponent,
      children:[
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent},
      ]
    }]),
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
