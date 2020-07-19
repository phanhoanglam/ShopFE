import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tree-menu-mobile',
  templateUrl: './tree-menu-mobile.component.html',
  styleUrls: ['./tree-menu-mobile.component.css']
})
export class TreeMenuMobileComponent implements OnInit {

  @Input() nodes;

  constructor() { }

  ngOnInit() {
  }

}
