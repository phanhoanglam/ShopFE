import { DiscountPopupComponent } from './discount-popup/discount-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  countQuantity: number = 1;

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  increase(){
    this.countQuantity = this.countQuantity + 1;
  }

  reduction(){
    this.countQuantity = this.countQuantity - 1;
  }

  showDiscount(){
    this.matDialog.open(DiscountPopupComponent);
  }
}
