import { Component } from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public elementos: MenuItem[] | undefined;

  public ngOnInit() {
    this.elementos = [
      {
        label: 'Inicio',
        icon: PrimeIcons.HOME,
        routerLink: '/'
      },
      {
        label: 'DataBase',
        icon: PrimeIcons.DATABASE,
        items: [
          {
            label: 'Usuarios',
            icon: PrimeIcons.USER,
            routerLink: 'usuarios'
          },
          {
            label: 'Centrales',
            icon: PrimeIcons.BUILDING,
            routerLink: 'centrales'
          },
          {
            separator: true
          },

        ]
      },
      {
        label: 'Incidencias',
        icon: PrimeIcons.INBOX,
        disabled: true,
      },
      {
        label: 'Cerrar Sesión',
        icon: PrimeIcons.POWER_OFF,
        disabled: true,
      }
    ];
  }

}
