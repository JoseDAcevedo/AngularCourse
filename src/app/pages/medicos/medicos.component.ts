import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  desde: number = 0;
  medicos: Medico[] = [];

  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this._medicoService.cargarMedicos(this.desde)
          .subscribe(medicos => this.medicos = medicos);
  }

  buscarMedico(termino:string){

    if(termino.length <= 0){
      this.cargarMedicos();
      return;
    }

    this._medicoService.buscarMedicos(termino)
          .subscribe(medicos => this.medicos = medicos);
  }

  borrarMedico( medico: Medico ) {

    this._medicoService.borrarMedico( medico._id )
            .subscribe( () =>  this.cargarMedicos() );

  }

  //Variable de paginación
  cambiarDesde(valor:number = 0){

    let desde = this.desde + valor;
    if(desde >= this._medicoService.totalMedicos){
      return;
    }

    if(desde < 0){
      return;
    }

    this.desde += valor;
    this.cargarMedicos();

  }

}
