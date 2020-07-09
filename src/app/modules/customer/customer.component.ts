import { HeaderComponent } from './layout/header/header.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit  {
  @ViewChild('drawer', {static: false}) drawer: MatDrawer;
  links: any[];
  constructor() { }

  ngOnInit() {
    this.links = [
      {
        label: 'Home',
        link: ''
      },
      {
        label: 'Shop',
        link: './shop'
      },
      {
        label: 'Sale',
        link: './sale'
      },
      {
        label: 'About',
        link: './about'
      },
      {
        label: 'Help',
        link: './help'
      }
    ];
  }

  close(){
    this.drawer.toggle(false);
  }

  onShow(event: boolean) {
    this.drawer.toggle(event);
  }
}
