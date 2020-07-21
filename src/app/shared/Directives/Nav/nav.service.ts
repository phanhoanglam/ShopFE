import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class NavService {
  public drawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(
      private router: Router
    ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.drawer.close();
  }

  public openNav() {
    this.drawer.open();
  }
}