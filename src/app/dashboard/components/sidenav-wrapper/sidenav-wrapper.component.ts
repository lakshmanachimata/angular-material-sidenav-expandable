import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss'],
})
export class SidenavWrapperComponent {
  isExpanded: boolean = false;
  isShowing = false;
  showSubmenu = false;
  popMenu1 = false;
  popMenu2 = false;
  constructor() {}

  toggleSubMenu() {
    if (this.isExpanded || this.isShowing) {
      this.showSubmenu = !this.showSubmenu;
      console.log('show SubMenu ' + this.showSubmenu);
    } else {
      console.log('float SubMenu');
    }
  }
  showFLMenu() {
    if (this.isExpanded || this.isShowing) {
    } else {
      console.log('float showFLMenu');
    }
  }
  closeFLMenu() {
    if (this.isExpanded || this.isShowing) {
    } else {
      setTimeout(() => {
        console.log('float closeFLMenu');
      }, 1000);
    }
  }
}
