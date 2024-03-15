import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

  status: boolean = false;

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _goService( id: any){

    if(id == 1 ){
      this.router.navigateByUrl('reporteDetallado');
    }
    if(id == 2){
      this.router.navigateByUrl('reporteDeposito');
    }
    if(id == 3){
      this.router.navigateByUrl('reporteResumido');
    }
    if(id == 4){
      this.router.navigateByUrl('reportePago');
    }
    if(id == 5){
      this.router.navigateByUrl('reporteCodigos');
    }
  }

}
