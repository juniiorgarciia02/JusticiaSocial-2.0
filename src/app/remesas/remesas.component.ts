import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remesas',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './remesas.component.html',
  styleUrl: './remesas.component.scss'
})
export class RemesasComponent {


  constructor(private router: Router) {

  }

  _goService(id: any){
    if(id == 1){
      this.router.navigateByUrl('enviarRemesa');
    }
    if(id == 2){
      this.router.navigateByUrl('recibirRemesa');
    }


  }


}
