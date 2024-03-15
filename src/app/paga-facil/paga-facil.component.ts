import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paga-facil',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './paga-facil.component.html',
  styleUrl: './paga-facil.component.scss'
})
export class PagaFacilComponent {

  status: boolean = false;

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _goService( id: any){

    if(id == 1 ){
      this.router.navigateByUrl('pagaFacilServ');
    }
    if(id == 2){
      this.router.navigateByUrl('pagaFacilAnular');
    }

  }

}
