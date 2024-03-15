import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-remesas-enviar-destinatario',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './remesas-enviar-destinatario.component.html',
  styleUrl: './remesas-enviar-destinatario.component.scss'
})
export class RemesasEnviarDestinatarioComponent {
  paisSeleccionar: any = [
    {
      id: 1,
      name: 'Haiti'
    }
  ];

  paisNacSeleccionar: any = [
    {
      id: 1,
      name: 'Rep. Dom.'
    },
    {
      id: 2,
      name: 'Estados Unidos'
    },
    {
      id: 3,
      name: 'Colombia'
    },
    {
      id: 4,
      name: 'Haiti'
    },
    {
      id: 5,
      name: 'España'
    }
  ];


  constructor(private router: Router) {

  }

  _siguientePage(){
    this.router.navigateByUrl('remesasEnviarDestinatario');
  }
}
