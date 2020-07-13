import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowCart: boolean = false;;
  @Output() show = new EventEmitter<boolean>();  
  links: any[];
  constructor() { }

  ngOnInit() {
    this.links = [
      {
        label: 'Home',
        link: '/home'
      },
      {
        label: 'Shop',
        link: '/shop'
      },
      {
        label: 'Sale',
        link: '/sale'
      },
      {
        label: 'About',
        link: '/about'
      },
      {
        label: 'Help',
        link: '/help'
      }
    ];
  }

  showCart(event){
    this.isShowCart = !this.isShowCart;
  }

  showMenuNav(){
    this.show.emit(true);
  }
}
