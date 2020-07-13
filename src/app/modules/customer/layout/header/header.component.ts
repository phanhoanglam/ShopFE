import { Component, OnInit, Output, EventEmitter, HostListener, Renderer2 } from '@angular/core';

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

  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  constructor(private ren: Renderer2) { }

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

  buttonEnter(trigger) {
    // /*
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
      }
      else if (!this.isMatMenuOpen) {

        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu()

      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }

    })
  }

  buttonLeave(trigger) {
    // /*
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
        this.enteredButton = false;
      }
    }, 100)
    // */
  }

  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
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

  showCart(event) {
    this.isShowCart = !this.isShowCart;
  }

  showMenuNav() {
    this.show.emit(true);
  }
}
