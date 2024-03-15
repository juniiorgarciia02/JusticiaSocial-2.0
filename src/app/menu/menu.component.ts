import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  verServiceAdd = 1;

  services: any = [
    {
      id: 1,
      name: 'Elector',
      url: 'assets/img/claroLogo.jpg',
      numSell: '0'
    },
    {
      id: 2,
      name: 'Coordinador',
      url: 'assets/img/altice.png',
      numSell: '0'
    },
    {
      id: 3,
      name: 'Supervisor',
      url: 'assets/img/altice.png',
      numSell: '0',
      
    }
  ]

  servicesAdded: any = [
    {
      id: 1,
      name: 'Elector',
      url: 'assets/img/claroLogo.jpg',
      numSell: '0'
    },
    {
      id: 2,
      name: 'Coordinador  ',
      url: 'assets/img/altice.png',
      numSell: '0'
    },
    {
      id: 3,
      name: 'Supervisor',
      url: 'assets/img/altice.png',
      numSell: '0'
    }
  ]

  constructor(private router: Router) {

  }

  status: boolean = false;
  addToggle() {
    this.status = !this.status;
  }

  _AgregarService(item: any) {
    let verificar = this.getDimensionsByFilter(item.id)

    if (verificar.length <= 0) {

      if (this.servicesAdded.length >= 4) {
        console.log(this.servicesAdded.length);
         this.verServiceAdd = 0;
        //   // Swal.fire("No puedes agregar más Servicios!");
      } else {
          this.servicesAdded.push(item);

          if( this.servicesAdded.length >= 4){
            this.verServiceAdd = 0;
          }
      }
      // Swal.fire("Servicio agregado con exito!");
    } else {

    }
  }

  getDimensionsByFilter(id: any) {
    return this.servicesAdded.filter((x: any) => x.id === id);
  }

  _goTo(item:any){
    console.log(item);
    if(item == 'Supervisor'){
      this.router.navigateByUrl('DetalleSupervisor');
    }
  }
}
