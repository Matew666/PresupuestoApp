import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css',
})
export class EgresoComponent {
  egresos: Egreso[] = [];
  @Input() ingresoTotal:number = 0;

  constructor(private egresoServicio: EgresoServicio) {}

  ngOnInit() {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
