import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-discount-popup',
  templateUrl: './discount-popup.component.html',
  styleUrls: ['./discount-popup.component.css']
})
export class DiscountPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DiscountPopupComponent>
  ) { }

  ngOnInit() {
  }

  close(ref) {
    this.dialogRef.close(ref);
  }

  save() {
    
  }
}
