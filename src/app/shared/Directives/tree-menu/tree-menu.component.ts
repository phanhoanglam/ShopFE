import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  @Input() nodes;

  constructor() { }

  ngOnInit() {}
}
