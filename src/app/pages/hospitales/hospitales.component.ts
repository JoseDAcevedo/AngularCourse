import { Component, OnInit } from '@angular/core';

import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  desde: number = 0;
  hospitales: Hospital[] = [];
  cargando: boolean = true;

  constructor( 
    public _hospitalService: HospitalService, 
    public _modalUploadService: ModalUploadService ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion
          .subscribe(resp=>this.cargarHospitales());
  }

  //Modal de carga de imágenes
  mostrarModal( hospital: Hospital ){
    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }

  //Cargar todos los hospitales
  cargarHospitales(){

    this._hospitalService.cargarHospitales(this.desde)
           .subscribe(hospitales => {
              this.hospitales = hospitales;
              this.cargando = false;
           });

  }

  //Buscar hospital
  buscarHospital(termino:string){
    if( termino.length <= 0 ){
      this.cargarHospitales();
      return;
    }

    this.cargando = true;

    this._hospitalService.buscarHospital(termino)
          .subscribe(hospitales =>{
            this.hospitales = hospitales;
            this.cargando = false;
          });
  }

  //Crear hospital
  crearHospital(){
    swal({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      input: 'text',
      type: 'info',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.value) {
        this._hospitalService.crearHospital(result.value)
            .subscribe(() => {
              this.cargarHospitales(), 
              swal('Hospital Agregado', result.value, 'success')
            });

      }

    })
  }

  //Actualizar hospital
  updateHospital( hospital: Hospital){
    this._hospitalService.updateHospital(hospital)
          .subscribe();
  }

  //Borrar hospital
  borrarHospital(hospital : Hospital){
    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar a ' + hospital.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this._hospitalService.borrarHospital(hospital._id)
              .subscribe(borrado => {
                this.cargarHospitales();
              });

      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
          'Cancelado',
          hospital.nombre + ' está a salvo :)',
          'error'
        )
      }
    })
  }

  //Variable de paginación
  cambiarDesde(valor:number){

    let desde = this.desde + valor;

    if(desde >= this._hospitalService.totalHospitales){
       return;
     }

     if(desde < 0){
       return;
     }

     this.desde += valor;
     this.cargarHospitales();

  }

}
