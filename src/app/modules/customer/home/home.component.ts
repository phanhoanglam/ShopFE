import { category } from 'src/app/shared/model/category';
import { CategoryServiceProxies } from 'src/app/shared/service-proxies/service-proxies';
import { SlideServiceProxies } from './../../../shared/service-proxies/service-proxies';
import { Slide } from './../../../shared/model/slide';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: Slide[] = [];
  categories: category[] = [];

  constructor(
    private _slideServiceProxy: SlideServiceProxies,
    private _categoryServiceProxy: CategoryServiceProxies,
    private titleService: Title
  ) {
    this.titleService.setTitle("Trang chủ");
    this._slideServiceProxy.getAll().subscribe((res) => {
      this.slides = res;
    })

    // get list categories
    this._categoryServiceProxy.getCategoryShowHome().subscribe(res => {
      this.categories = res
      console.log(this.categories);
      
    })
  }
}
