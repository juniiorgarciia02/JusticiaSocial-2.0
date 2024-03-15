import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recibir-remesa',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './recibir-remesa.component.html',
  styleUrl: './recibir-remesa.component.scss'
})
export class RecibirRemesaComponent {

}
