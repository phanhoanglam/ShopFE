import { category } from './../../model/category';
import { Component, OnInit, Input, ViewChild, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../Nav/nav.service';
import { NavItem } from '../Nav/nav-item';

@Component({
  selector: 'app-tree-menu-mobile',
  templateUrl: './tree-menu-mobile.component.html',
  styleUrls: ['./tree-menu-mobile.component.scss']
})
export class TreeMenuMobileComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: category;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.metatitle && url) {
        this.expanded = url.indexOf(`/${this.item.metatitle}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: category) {
    if (!item.categoryDtos || !item.categoryDtos.length) {
      this.router.navigate([item.metatitle]);
      this.navService.closeNav();
    }
    if (item.categoryDtos && item.categoryDtos.length) {
      this.expanded = !this.expanded;
    }
  }
}