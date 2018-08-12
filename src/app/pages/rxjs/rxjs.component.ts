import { Component, OnInit, OnDestroy } from '@angular/core';

import { map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';

import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  
  constructor() {

    this.subscription = this.returnObservable()
    .subscribe( 
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!')
    );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Página cerrada');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    
    return new Observable( (observer: Subscriber<any>)  => {

      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor:contador
        }
        observer.next( salida );

        if (contador == 3){
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000);

    }).pipe(    
      map(resp => resp.valor),
      filter( (valor, index) => {
        if( (valor % 2) == 1){
          //impar
          return true;
        } else{
          //par
          return false;
        }
      })
    );

  }

}
