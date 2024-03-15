import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.scss'
})
export class GiftCardComponent {
  status: boolean = false;

  services: any = [
    {
      id: 1,
      name: 'AMAZON',
      url: 'assets/img/amazonGift.png',
      numSell: '0123'
    },
    {
      id: 2,
      name: 'GOOGLE PLAY',
      url: 'assets/img/googleplay.jpg',
      numSell: '0123'
    },
    {
      id: 3,
      name: 'NINTENDO',
      url: 'assets/img/Nintendo.jpg',
      numSell: '0123'
    },
    {
      id: 4,
      name: 'GAMES EA',
      url: 'assets/img/EA-Games.png',
      numSell: '0123'
    },
    {
      id: 5,
      name: 'ROBLOX',
      url: 'assets/img/RBLX.png',
      numSell: '0123'
    }
  ]

  constructor(private router: Router) {

  }

  addToggle() {
    this.status = !this.status;
  }

  _seleccionarService(item: any) {
    console.log(item);
     localStorage.setItem('GiftCard', JSON.stringify([item]))
     this.router.navigateByUrl('/giftCardCompra');

  }
}
