import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SettingsService, 
        SharedService, 
        SidebarService, 
        UsuarioService, 
        LoginGuardGuard,
        SubirArchivoService
      } 
        from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    SettingsService,
    SidebarService,
    SharedService,
    SubirArchivoService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
