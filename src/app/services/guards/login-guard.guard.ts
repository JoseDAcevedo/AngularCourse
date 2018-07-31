import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService, public router: Router){

  }

  canActivate(){

    if(this._usuarioService.estaLogueado()){
      console.log('GUARD');
      return true;
    } else {
      console.log('Sin loguear');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
