import { Injectable } from '@angular/core';

import { Hospital } from '../../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { UsuarioService } from '../usuario/usuario.service';

import swal from 'sweetalert2';

@Injectable()
export class HospitalService {

  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  //GET hospitales
  //Nota: Envía toda la respuesta del servidor para ser declarada cada variable en el componente
  cargarHospitales(desde:number = 0) {

    let url = URL_SERVICIOS + '/hospital?desde=' + desde;
    return this.http.get( url )
              .map( (resp: any) => {
                this.totalHospitales = resp.total;
                return resp.hospitales;
              });

  }

  //Buscar hospitales
  buscarHospital(termino:string){
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospital/' + termino;
    return this.http.get(url)
                  .map((resp: any) => resp.hospital);
  }

  //Crear hospital
  crearHospital(nombre: string){

    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioService.token;

    return this.http.post(url, {nombre})
            .map((resp:any) => resp.hospital);

  }

  //Actualizar hospital
  updateHospital(hospital: Hospital){

    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url+= '?token=' + this._usuarioService.token;
    return this.http.put(url, hospital)
            .map( (resp:any) => {
              swal('Hospital Actualizado', resp.hospital.nombre, 'success');
              return true;
            });
  }

  //Borrar hospital
  borrarHospital(id:string){
    
    let url = URL_SERVICIOS + '/hospital/' + id;
    url+= '?token=' + this._usuarioService.token;

    return this.http.delete(url).map(resp =>{
      swal('Eliminado', 'El hospital ha sido eliminado', 'success')
    });
  }

  //Solicitar un hospital por el ID
  obtenerHospital(id:string){
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
              .map((resp: any) => resp.hospital); 
  }

}
