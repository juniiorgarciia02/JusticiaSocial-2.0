import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-resumido',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './reporte-resumido.component.html',
  styleUrl: './reporte-resumido.component.scss'
})
export class ReporteResumidoComponent {

}
