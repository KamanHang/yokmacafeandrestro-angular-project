import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, CommonModule, CardModule, AvatarModule, AvatarGroupModule, DividerModule, TooltipModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuitems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuitems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-objects-column',
        routerLink: 'dashboard'
      },
      {
        label: 'Place Order',
        icon: 'pi pi-list',
        routerLink: 'placeorder'
      },
      {
        label: 'View Order',
        icon: 'pi pi-book',
        routerLink: 'vieworder'
      },
      {
        label: 'Register Student',
        icon: 'pi pi-user-plus',
        routerLink: 'registerstudent'
      },
      {
        label: 'View Student',
        icon: 'pi pi-address-book',
        routerLink: 'viewstudent'
      },
      {
        label: 'Account',
        icon: 'pi pi-user',
        routerLink: 'account'
      },
      
    ];
  }
}
