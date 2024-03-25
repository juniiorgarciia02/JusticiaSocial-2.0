import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesSqlService } from '../Services/services-sql.service';
import { Router } from '@angular/router';
import * as logger from "../../scripts/logger.js";

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
  provinciaSelect: any = [];
  municipios: any = [];
  constructor( public sqlService: ServicesSqlService, public router:Router){
    this.accion = JSON.parse(localStorage.getItem('accion')!);
    this.provinciaSelect = JSON.parse(localStorage.getItem('provincia')!);
    this._getMunicipios();

   
  }

  ngAfterContentInit( ){
   
  }

  _seleccionarSupervisor(item:any){
    
  };

  _ngAtras(){
    this.router.navigateByUrl('/DetalleSupervisor');
  }

  _getMunicipios(){
    this.sqlService.getMunicipios(this.provinciaSelect[0].idprovincia ).subscribe( (data: any)=>{
        this.municipios = data
    });
  }

  selectOption(item: any){
    console.log(item.value);
  }

  _AddSupervisor(){
    if(this.accion == 1){
      console.log(this.nombre, '' , this.telefono, )
    }else{

    }
    
    // this.sqlService.getMunicipios(this.provinciaSelect[0].idprovincia ).subscribe( (data: any)=>{
    //     this.municipios = data
    // });
  }
}
