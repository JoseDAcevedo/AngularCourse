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
        {titulo: 'Gráficas', url: '/graficas1'},
        {titulo: 'Promesas', url: '/promesas'},
        {titulo: 'RXJS', url: '/rxjs'}
      ]
    } ,
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Hospitales', url:'/hospitales'},
        {titulo: 'Médicos', url:'/medicos'}
      ]
    }
  ]

  constructor() { }

}
