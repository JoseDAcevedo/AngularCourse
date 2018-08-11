import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion
          .subscribe(resp=>this.cargarUsuarios());
  }

//Modal de carga de imágenes
  mostrarModal( id:string ){
    this._modalUploadService.mostrarModal('usuarios', id);
  }

//GET de usuarios
  cargarUsuarios(){

    this.cargando = true;

    this._usuarioService.cargarUsuarios(this.desde)
          .subscribe( (resp:any) => {
            this.totalRegistros = resp.total;
            this.usuarios = resp.usuarios;
            this.cargando = false;
          });

  }
//Variable de paginación
  cambiarDesde(valor:number){

    let desde = this.desde + valor;

    if(desde >= this.totalRegistros){
      return;
    }

    if(desde < 0){
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

//Busqueda
  buscarUsuario(termino: string){

    if( termino.length <= 0 ){
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioService.buscarUsuarios(termino)
          .subscribe((usuarios:Usuario[]) =>{
            this.usuarios = usuarios;
            this.cargando = false;
          });
  }

  borrarUsuario( usuario: Usuario ){
    
    if(usuario._id == this._usuarioService.usuario._id){
      swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }

    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar a ' + usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this._usuarioService.borrarUsuario(usuario._id)
              .subscribe(borrado => {
                this.cargarUsuarios();
              });

      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
          'Cancelado',
          usuario.nombre + ' está a salvo :)',
          'error'
        )
      }
    })

  }

}