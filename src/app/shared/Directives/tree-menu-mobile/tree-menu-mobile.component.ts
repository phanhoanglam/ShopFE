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
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.link && url) {
        this.expanded = url.indexOf(`/${this.item.link}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.link]);
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}