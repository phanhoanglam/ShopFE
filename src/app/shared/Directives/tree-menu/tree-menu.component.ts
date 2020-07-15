import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  @Input() nodes;
  @ViewChild('childMenu', { static: true }) public childMenu;
  toggle: number;

  constructor() { }

  ngOnInit() {
    console.log(this.nodes);
    
  }

  eventClose(trigger) {
    trigger.closeMenu();
    console.log('close')
  }
}
