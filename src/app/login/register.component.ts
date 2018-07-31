import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '@angular/router';

//Sweet Alert
import swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';

//Modelo del usuario
import { Usuario } from '../models/usuario.model';

//Cargar los plugins iniciales
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  //Declara el formulario
  forma: FormGroup;

  constructor( public _usuarioService : UsuarioService, public router: Router) { }

  //Función para comprar que dos parámetros sean iguales
  iguales( campo1: string , campo2: string ){
    return ( group: FormGroup ) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 == pass2){
        return null;
      } else {
        return {
          iguales: true
        };
      }
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl(null, Validators.required),
      pwd2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.iguales('pwd', 'pwd2') });

    
  }
  
  //Funcion para validaciones y registro de usuarios
  registrarUsuario(){

    if( this.forma.invalid){
      return;
    }
    if( !this.forma.value.condiciones ){
      swal('Atención', 'Debe aceptar las condiciones', 'warning');
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.pwd
    );

    this._usuarioService.crearUsuario(usuario)
              .subscribe(resp =>{
                this.router.navigate(['/login']);
              })

  }

}
//Auto llenado por defecto
    // this.forma.setValue({
    //   nombre: 'Jose Acevedo',
    //   email: 'jdavidacevedo12@hotmail.com',
    //   pwd: '123',
    //   pwd2: '123',
    //   condiciones: true
    // });
