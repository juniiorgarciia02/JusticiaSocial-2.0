import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporte-pago',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './reporte-pago.component.html',
  styleUrl: './reporte-pago.component.scss'
})
export class ReportePagoComponent {

}
