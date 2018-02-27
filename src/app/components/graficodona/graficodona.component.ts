import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  
  @Input() chartLabels:string[] = [];
  @Input() chartData:number[] = [];
  @Input() chartType:string = '';
  
  constructor() { }

  ngOnInit() {}

}
