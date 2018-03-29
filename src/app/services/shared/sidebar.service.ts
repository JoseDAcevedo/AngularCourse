import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Inicio', url: '/home'},
        {titulo: 'Barra de progreso', url: '/progress'},
        {titulo: 'Gráficas', url: '/graficas1'}
      ]
    }
  ]

  constructor() { }

}
