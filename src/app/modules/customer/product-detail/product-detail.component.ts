import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  countQuantity: number = 1;

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Detail");
  }

  ngOnInit() {}

  increase(){
    this.countQuantity = this.countQuantity + 1;
  }

  reduction(){
    this.countQuantity = this.countQuantity - 1;
  }

}
