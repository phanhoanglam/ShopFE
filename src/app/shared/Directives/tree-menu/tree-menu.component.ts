import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {

  @Input() nodes;
  @ViewChild('childMenu', { static: true }) public childMenu;
  constructor() { }

  ngOnInit() {
  }

}
