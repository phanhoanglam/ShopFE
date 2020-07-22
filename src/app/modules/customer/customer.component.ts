import { HeaderComponent } from './layout/header/header.component';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { NavService } from 'src/app/shared/Directives/Nav/nav.service';
import { CategoryServiceProxies } from 'src/app/shared/service-proxies/service-proxies';
import { category } from 'src/app/shared/model/category';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit  {
  @ViewChild('drawer', {static: false}) drawer: ElementRef;
  navItems: any[];
  category: category[] = [];
  
  constructor(
    private categoryServiceProxy: CategoryServiceProxies,
    public navService: NavService
  ) { }

  ngOnInit() {
    this.categoryServiceProxy.getAll().subscribe((res: category[]) => {
      this.category = res;
    });
  }

  ngAfterViewInit() {
    this.navService.drawer = this.drawer;
  }
}
