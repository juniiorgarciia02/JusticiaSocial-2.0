import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-codigos',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './reporte-codigos.component.html',
  styleUrl: './reporte-codigos.component.scss'
})
export class ReporteCodigosComponent {

}
