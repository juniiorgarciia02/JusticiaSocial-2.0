import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesSqlService } from '../Services/services-sql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [DashboardComponent, CommonModule, FormsModule],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.scss'
})
export class SupervisorComponent {
  supervisores: any = [];
  accion: any = '';
  nombre: any = '';
  telefono: any = '';
  constructor( public sqlService: ServicesSqlService, public router:Router){
    this.accion = JSON.parse(localStorage.getItem('accion')!);
  }

  _seleccionarSupervisor(item:any){
    
  };

  _ngAtras(){
    this.router.navigateByUrl('/DetalleSupervisor');
  }
}
