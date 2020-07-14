import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowCart: boolean = false;;
  @Output() show = new EventEmitter<boolean>();
  navItems: any[];
  windowScrolled: boolean;

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  @ViewChild('cart', { static: false }) cart: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (this.cart !== undefined) {
        if (e.target !== this.toggleButton.nativeElement && !this.cart.nativeElement.contains(e.target)) {
          this.isShowCart = false;
        }
      }
    });
  }

  ngOnInit() {
    this.navItems = [
      {
        displayName: 'Trang chủ',
        link: "/home",
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

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset >= 50 || document.documentElement.scrollTop >= 50 || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  openMyMenu() {
    this.trigger.toggleMenu();
  }

  showCart() {
    this.isShowCart = !this.isShowCart;
  }

  showMenuNav() {
    this.show.emit(true);
  }
}
