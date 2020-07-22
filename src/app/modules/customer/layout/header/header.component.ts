import { NavItem } from './../../../../shared/Directives/Nav/nav-item';
import { category } from './../../../../shared/model/category';
import { CategoryServiceProxies } from './../../../../shared/service-proxies/service-proxies';
import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
import { NavService } from 'src/app/shared/Directives/Nav/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowCart: boolean = false;;
  @Output() show = new EventEmitter<boolean>();
  navItems: NavItem[] = [];
  windowScrolled: boolean;
  subscriptions: Subscription = new Subscription();
  category: category[] = [];

  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  @ViewChild('cart', { static: false }) cart: ElementRef;

  constructor(
    private categoryServiceProxy: CategoryServiceProxies,
    private renderer: Renderer2,
    private router: Router,
    public navService: NavService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.cart !== undefined) {
        if (e.target !== this.toggleButton.nativeElement && !this.cart.nativeElement.contains(e.target)) {
          this.isShowCart = false;
        }
      }
    });
  }

  ngOnInit() {
    this.categoryServiceProxy.getAll().subscribe((res: category[]) => {
      this.category = res;
    });
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

  viewCart() {
    this.router.navigate(['/gio-hang']);
    this.isShowCart = false;
  }

  checkout() {
    this.router.navigate(['/gio-hang/thanh-toan']);
    this.isShowCart = false;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
