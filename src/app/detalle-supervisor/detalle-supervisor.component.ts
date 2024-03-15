import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { ServicesSqlService } from '../Services/services-sql.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-supervisor',
  standalone: true,
  imports: [DashboardComponent, CommonModule],
  templateUrl: './detalle-supervisor.component.html',
  styleUrl: './detalle-supervisor.component.scss'
})
export class DetalleSupervisorComponent {

  // accion  1= Agregar,  2= editar
  supervisores : any = [];

  constructor(public router: Router, public SlqService: ServicesSqlService){
    let provincia = JSON.parse(localStorage.getItem('provincia')!);
   
    this.SlqService.getSupervisores( provincia[0].idprovincia).subscribe( (data: any)=>{
      if(data.length > 0){
        this.supervisores = data
      }
    });
  }

  _seleccionarSupervisor(item: any){
    localStorage.setItem('editarSupervisor', JSON.stringify([item]));
    localStorage.setItem('accion', JSON.stringify(2));
    
    this.router.navigateByUrl('/Supervisor');
  };

  _goTo(){
    this.router.navigateByUrl('menu');
  }

  _GoAgregarSupervisor(){
    localStorage.setItem('accion', JSON.stringify(1));
    this.router.navigateByUrl('/Supervisor');
  }
}
