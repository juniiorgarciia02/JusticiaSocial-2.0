import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-deposito',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './reporte-deposito.component.html',
  styleUrl: './reporte-deposito.component.scss'
})
export class ReporteDepositoComponent {

}
