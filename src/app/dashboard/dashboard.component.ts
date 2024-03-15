import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnularComponent } from '../anular/anular.component';

// ID: 1342979
// pass: 192543

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  status: boolean = false;
  routerLink: any = [
    {
      id: 1,
      name: 'Dashboard',
      status: 'active',
      url: 'menu',
      icon:'bx bxs-dashboard'
    },
    {
      id: 2,
      name: 'Elector',
      status: '1',
      url: 'DetalleElector',
      icon:'bx bxs-dashboard'
    },
    {
      id: 3,
      name: 'Coordinador',
      status: '1',
      url: 'elector',
      icon:'bx bxs-dashboard'
    },
    {
      id: 4,
      name: 'Supervisor',
      status: '1',
      url: 'DetalleSupervisor',
      icon:'bx bxs-dashboard'
    },
  ];

  usuario: any = [];
  constructor(private router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('user')!);

    let routerd: any = JSON.parse(localStorage.getItem('Router')!);
    if (routerd == undefined) {
      localStorage.setItem('Router', JSON.stringify(this.routerLink))
    }else{
      if(routerd.length == this.routerLink.length){
        this.routerLink = routerd
      }else{
        localStorage.setItem('Router', JSON.stringify(this.routerLink))
      }
    }
   
    
  }

  addToggle() {
    console.log('entro');
    this.status = !this.status;
  }

  _logOut(){
    this.router.navigateByUrl('')
  }

  _verificarRouter(item: any, id: any) {

    let router: any = JSON.parse(localStorage.getItem('Router')!);

    this.routerLink = router.map((item: any) => {
      item.status = item.status ? '' || '' : ''
      return item;
    });

    this.routerLink.find((item: any) => item.id == id).status = 'active';
    localStorage.setItem('Router', JSON.stringify(this.routerLink))
    this.router.navigateByUrl(item);

  }

}