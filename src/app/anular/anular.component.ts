import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-anular',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './anular.component.html',
  styleUrl: './anular.component.scss'
})
export class AnularComponent {

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
