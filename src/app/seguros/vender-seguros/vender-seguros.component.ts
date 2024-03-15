import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender-seguros',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './vender-seguros.component.html',
  styleUrl: './vender-seguros.component.scss'
})
export class VenderSegurosComponent {

  tipoVehiculo: any = [
    {
      id: 1,
      name: 'MOTOCICLETA'
    },
    {
      id: 2,
      name: 'CAMIONETA/ FURGONETA'
    },
    {
      id: 3,
      name: 'AUTOMOVIL/JEEP / STATION'
    },
    {
      id: 4,
      name: 'CAMIONETA/FURGONETA + GRUA'
    },
    {
      id: 5,
      name: 'AUTOMOVIL/JEEP/ STATION + GRUA'
    }
  ];

  vigencia: any = [
    {
      id: 1,
      name: 'No items'
    },
  ];


  id = '';
  telefono= '';
  cedula= '';
  chasis= '';
  tipoVeh= '';
  vigenciaS= '';
  precio= '';


  constructor(private router: Router) {
     let Items = JSON.parse(localStorage.getItem('SegurosPrecio')!);
     if(Items == undefined){

     }else{
      this.telefono = Items[0].telefono;
      this.cedula = Items[0].cedula;
      this.chasis = Items[0].chasis;
      this.precio = Items[0].precio;
      console.log( Items[0].precio);
     }
  }

}
