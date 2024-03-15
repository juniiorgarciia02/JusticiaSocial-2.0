import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enviar-resuelve-ya',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './enviar-resuelve-ya.component.html',
  styleUrl: './enviar-resuelve-ya.component.scss'
})
export class EnviarResuelveYaComponent {
  monto = '';
  paisSeleccionar: any = [
    {
      id: 1,
      name:'Haiti'
    }
  ];

  tipoComsumo: any = [
    {
      id: 1,
      name:'Farmacias'
    },
    {
      id: 2,
      name:'Combustibles'
    },
    {
      id: 3,
      name:'Alimentos'
    }
  ];
}
