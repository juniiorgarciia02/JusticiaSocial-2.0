import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-seguro',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './consultar-seguro.component.html',
  styleUrl: './consultar-seguro.component.scss'
})
export class ConsultarSeguroComponent {

}
