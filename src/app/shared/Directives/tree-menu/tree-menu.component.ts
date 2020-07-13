import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  @Input() nodes;
  @ViewChild('childMenu', { static: true }) public childMenu;
  @Output()
  mouseenter2 = new EventEmitter();
  @Output()
  mouseleave2 = new EventEmitter();
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  constructor() { }

  ngOnInit() {
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
    console.log("menuEnter");
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
    console.log("menuLeave");
  }

  // mouseleave2(trigger){

  // }
}
