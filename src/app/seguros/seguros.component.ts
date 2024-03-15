import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguros',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './seguros.component.html',
  styleUrl: './seguros.component.scss'
})
export class SegurosComponent {

  status: boolean = false;

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _goService( id: any){

    if(id == 1 ){
      this.router.navigateByUrl('venderSeguros');
    }
    if(id == 2){
      this.router.navigateByUrl('consultarSeguro');
    }
    if(id == 3){
      this.router.navigateByUrl('planesSeguro');
    }

  }

}
