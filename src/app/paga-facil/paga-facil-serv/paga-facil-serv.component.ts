import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paga-facil-serv',
  standalone: true,
  imports: [DashboardComponent, CommonModule],
  templateUrl: './paga-facil-serv.component.html',
  styleUrl: './paga-facil-serv.component.scss'
})
export class PagaFacilServComponent {
  status: boolean = false;

  services: any = [
    {
      id: 1,
      name: 'CLARO',
      url: 'assets/img/claroLogo.jpg',
      numSell: '0123'
    },
    {
      id: 2,
      name: 'ALTICE',
      url: 'assets/img/altice.png',
      numSell: '0123'
    },
    {
      id: 3,
      name: 'VIVA',
      url: 'assets/img/viva.png',
      numSell: '0123'
    },
    {
      id: 4,
      name: 'DIGICEL',
      url: 'assets/img/digicel.png',
      numSell: '0123'
    },
    {
      id: 5,
      name: 'NATCOM',
      url: 'assets/img/natcom.jpg',
      numSell: '0123'
    }
  ]

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _seleccionarService(item: any) {
    console.log(item);
     localStorage.setItem('pagaFacilServPago', JSON.stringify([item]))
     this.router.navigateByUrl('/pagaFacilServPago');

  }
}
