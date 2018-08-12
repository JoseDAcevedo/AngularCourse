import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SettingsService, 
        SharedService, 
        SidebarService, 
        UsuarioService,
        HospitalService,
        MedicoService,
        LoginGuardGuard,
        AdminGuard,
        SubirArchivoService
      } 
        from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    HospitalService,
    MedicoService,
    SettingsService,
    SidebarService,
    SharedService,
    SubirArchivoService,
    LoginGuardGuard,
    AdminGuard,
    ModalUploadService
  ],
  declarations: []
})
export class ServiceModule { }
