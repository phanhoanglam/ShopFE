import { CategoryServiceProxies } from './../../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiscountPopupComponent } from '../discount-popup/discount-popup.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private _serviceProxyComponent: CategoryServiceProxies,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this._serviceProxyComponent.getAll().subscribe((res)=>{
      console.log(res);
      
    });
  }

  showDiscount(){
    this.matDialog.open(DiscountPopupComponent);
  }
}
