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
        link: "",
        children: [],
      },
      {
        displayName: 'Sản phẩm',
        children: [
          {
            displayName: 'Speakers',
            children: [
              {
                displayName: 'Michael Prentice',
                route: 'michael-prentice',
                children: [
                  {
                    displayName: 'Delight your Organization',
                    iconName: 'star_rate',
                    route: 'material-design'
                  }
                ]
              },
              {
                displayName: 'Stephen Fluin',
                route: 'stephen-fluin',
                children: [
                  {
                    displayName: 'What\'s up with the Web?',
                    iconName: 'star_rate',
                    route: 'what-up-web'
                  }
                ]
              },
              {
                displayName: 'Mike Brocchi',
                route: 'mike-brocchi',
                children: [
                  {
                    displayName: 'My ally, the CLI',
                    iconName: 'star_rate',
                    route: 'my-ally-cli'
                  },
                  {
                    displayName: 'Become an Angular Tailor',
                    iconName: 'star_rate',
                    route: 'become-angular-tailer'
                  }
                ]
              }
            ]
          },
          {
            displayName: 'Sessions',
            children: [
              {
                displayName: 'Delight your Organization',
                iconName: 'star_rate',
                route: 'material-design'
              },
              {
                displayName: 'What\'s up with the Web?',
                iconName: 'star_rate',
                route: 'what-up-web'
              },
              {
                displayName: 'My ally, the CLI',
                iconName: 'star_rate',
                route: 'my-ally-cli'
              },
              {
                displayName: 'Become an Angular Tailor',
                iconName: 'star_rate',
                route: 'become-angular-tailer'
              }
            ]
          },
        ]
      },
      {
        displayName: 'Hàng mới',
        children: [],
      },
      {
        displayName: 'Trợ giúp',
        children: [],
      },
      {
        displayName: 'Liên hệ',
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
