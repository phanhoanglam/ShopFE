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
  navItems: any[];
  constructor() { }

  ngOnInit() {
    this.navItems = [
      {
        displayName: 'Trang chủ',
        link: "/trang-chu",
        children: [],
      },
      {
        displayName: 'Sản phẩm',
        link: "/category",
        children: [
          {
            displayName: 'Speakers',
            link: "/category/product",
            children: [
              {
                displayName: 'Michael Prentice',
                link: "/b",
                children: [
                  {
                    displayName: 'Delight your Organization',
                    link: "/c",
                    children: []
                  }
                ]
              },
              {
                displayName: 'Stephen Fluin',
                link: "/e",
                children: [
                  {
                    displayName: 'What\'s up with the Web?',
                    link: "/f",
                    children: []
                  }
                ]
              },
              {
                displayName: 'Mike Brocchi',
                link: "/g",
                children: [
                  {
                    displayName: 'My ally, the CLI',
                    link: "/h",
                    children: []
                  },
                  {
                    displayName: 'Become an Angular Tailor',
                    link: "/j",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            displayName: 'Sessions',
            link: "/1",
            children: [
              {
                displayName: 'Delight your Organization',
                link: "/k",
                children: []
              },
              {
                displayName: 'What\'s up with the Web?',
                link: "/l",
                children: []
              },
              {
                displayName: 'My ally, the CLI',
                link: "/z",
                children: []
              },
              {
                displayName: 'Become an Angular Tailor',
                link: "/x",
                children: []
              }
            ]
          },
        ]
      },
      {
        displayName: 'Hàng mới',
        link: "/m",
        children: []
      },
      {
        displayName: 'Trợ giúp',
        link: "/about",
        children: [],
      },
      {
        displayName: 'Liên hệ',
        link: "/contact",
        children: [],
      },
    ];
  }

  close(){
    this.drawer.toggle(false);
  }

  onShow(event: boolean) {
    this.drawer.toggle(event);
  }
}
