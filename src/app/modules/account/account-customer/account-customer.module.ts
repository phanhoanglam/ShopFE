import { AccountCustomerComponent } from './account-customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCustomerRoutingModule } from './account-customer-routing.module';
import { MatSidenavModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AccountCustomerComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountCustomerRoutingModule,
    MatSidenavModule,
  ]
})
export class AccountCustomerModule { }
