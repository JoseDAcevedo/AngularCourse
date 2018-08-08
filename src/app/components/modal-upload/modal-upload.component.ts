import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imgTemp: string;

  constructor(
    public _subirArchivoService: SubirArchivoService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.imgTemp = null;
    this.imagenSubir = null;
    
    this._modalUploadService.ocultarModal();
  }

  selectImagen(archivo: File){
    
    if(!archivo){
      return;
    }
    
    if(archivo.type.indexOf('image') < 0){
      swal('Solo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    
    this.imagenSubir = archivo;
    
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgTemp = reader.result;
    
  }

  subirImagen(){
  
    this._subirArchivoService.subirArchivo(
      this.imagenSubir, 
      this._modalUploadService.tipo, 
      this._modalUploadService.id)
      .then(resp => {

        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();
  
      })
      .catch(err => {
        console.log('Error en la carga');
      });
  
  }

}
