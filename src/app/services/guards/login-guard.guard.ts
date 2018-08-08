import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert2';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService, public router: Router){

  }

  canActivate(){

    if(this._usuarioService.estaLogueado()){
      return true;
    } else {
      swal('No ha iniciado sesión', 'Por favor iniciar sesión con una cuenta', 'warning');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
