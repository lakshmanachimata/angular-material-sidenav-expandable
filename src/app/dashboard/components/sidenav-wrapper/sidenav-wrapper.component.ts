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
      this.popMenu2 = !this.popMenu2
      console.log('toggleSubMenu float ' + this.popMenu2);
    }
  }
  showFLMenu() {
    if (this.isExpanded || this.isShowing) {
    } else {
      setTimeout(() => {
        this.popMenu2 = true
        console.log('closeFLMenu float ' + this.popMenu2);
      }, 500);
      console.log('showFLMenu float ' + this.popMenu2);
    }
  }
  closeFLMenu() {
    if (this.isExpanded || this.isShowing) {
    } else {
      setTimeout(() => {
        this.popMenu2 = false
        console.log('closeFLMenu float ' + this.popMenu2);
      }, 1000);
    }
  }
}
