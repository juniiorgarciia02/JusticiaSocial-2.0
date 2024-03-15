import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-card-compra',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './gift-card-compra.component.html',
  styleUrl: './gift-card-compra.component.scss'
})
export class GiftCardCompraComponent {
  status: boolean = false;
  services: any = [];
  seleccionar: any = [
    {
      id: 1,
      name:'Amazon USA $5',
      price: '320'
    },
    {
      id: 2,
      name:'Amazon USA $10',
      price: '600'
    }
  ];

  producto = '';
  monto= '';
  cargoServ= '';
  total= '';

  constructor(private router: Router) {
    let item = JSON.parse(localStorage.getItem('GiftCard')!);
    this.services = item
  }

  addToggle() {
    this.status = !this.status;
  }

  _seleccionarService(item: any) {
    this.producto  = item.name;
    this.monto = item.price
    this.cargoServ =item.price
    this.total = item.price
   
  }

}