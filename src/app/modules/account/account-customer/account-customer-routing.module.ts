import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountCustomerComponent } from './account-customer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: AccountCustomerComponent,
            children: [
                { path: '', pathMatch: 'full', redirectTo: 'dang-nhap' },
                { path: 'dang-nhap', component: LoginComponent },
                { path: 'dang-ki', component: RegisterComponent },
                { path: 'quen-mat-khau', component: ForgotPasswordComponent },
            ]
        }]),
    ],
    exports: [RouterModule],
})
export class AccountCustomerRoutingModule { }
