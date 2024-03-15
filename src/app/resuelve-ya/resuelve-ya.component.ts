import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resuelve-ya',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './resuelve-ya.component.html',
  styleUrl: './resuelve-ya.component.scss'
})
export class ResuelveYaComponent {

  status: boolean = false;

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _goService( id: any){

    if(id == 1 ){
      this.router.navigateByUrl('enviarResuelveYa');
    }
    if(id == 2){
      this.router.navigateByUrl('entregarResuelveYa');
    }
    if(id == 3){
      this.router.navigateByUrl('reporteResuelveYa');
    }
  }

}
