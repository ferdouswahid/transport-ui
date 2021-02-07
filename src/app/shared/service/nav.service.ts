import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from './windows.service';

export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({providedIn: 'root'})
export class NavService {

  constructor(@Inject(WINDOW) private window) {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
  }

  public screenWidth: any;
  public collapseSidebar = false;

  MENUITEMS: Menu[] = [
    {path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false},
  ];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
}
