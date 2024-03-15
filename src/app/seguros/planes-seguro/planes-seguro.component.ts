import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes-seguro',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './planes-seguro.component.html',
  styleUrl: './planes-seguro.component.scss'
})
export class PlanesSeguroComponent {
  
  planesSeguros: any  = [
    {
      id: 1,
      telefono: '8293900226',
      cedula:'03105662005',
      chasis:'CHASI056565',
      tipoVeh: 'MOTOCICLETA',
      vigencia: '6M',
      precio: '200.00'
    }
  ];

  constructor(private router: Router) {
    
  }

  _SelectPrecio(item: any){
    localStorage.setItem('SegurosPrecio', JSON.stringify([item]));
    this.router.navigateByUrl('venderSeguros');
  }

}
