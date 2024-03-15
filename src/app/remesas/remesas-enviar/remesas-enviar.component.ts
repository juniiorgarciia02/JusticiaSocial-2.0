import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remesas-enviar',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './remesas-enviar.component.html',
  styleUrl: './remesas-enviar.component.scss'
})
export class RemesasEnviarComponent {
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
