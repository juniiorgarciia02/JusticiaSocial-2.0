import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2'
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-recargas-post',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './recargas-post.component.html',
  styleUrl: './recargas-post.component.scss'
})
export class RecargasPostComponent {
  @ViewChild("yourControlName") yourControl: any;
  @ViewChild("montoRecarga") yourControlRecarga: any;
  status: boolean = false;
  numberSelect = '000';
  referencia= '';
  recargaSelect = '';
  numberName: any = [
    {
      name: '809'
    },
    {
      name: '829'
    },
    {
      name: '849'
    }
  ]

  montoRecarga: any = [
    {
      name: '30'
    },
    {
      name: '50'
    },
    {
      name: '60'
    },
    {
      name: '100'
    }
  ]

  services: any = [
    {
      id: 1,
      name: 'CLARO',
      url: 'assets/img/claroLogo.jpg',
      numSell: '0123'
    },
    {
      id: 2,
      name: 'ALTICE',
      url: 'assets/img/altice.png',
      numSell: '0123'
    },
    {
      id: 3,
      name: 'VIVA',
      url: 'assets/img/viva.png',
      numSell: '0123'
    },
    {
      id: 4,
      name: 'DIGICEL',
      url: 'assets/img/digicel.png',
      numSell: '0123'
    },
    {
      id: 5,
      name: 'NATCOM',
      url: 'assets/img/natcom.jpg',
      numSell: '0123'
    }
  ]


  getItemsSelect: any;
  constructor(private router: Router) {
    this.getItemsSelect = JSON.parse(localStorage.getItem("recargasPost")!)
  }

  addToggle() {
    this.status = !this.status;
  }

  _numerSelect(item: any) {
    console.log(item);
    this.numberSelect = item.name
    this.yourControl.nativeElement.focus();
  }

  _recargaSelect(item: any) {
    this.recargaSelect = item.name
    // this.montoRecarga.nativeElement.focus();
    this._sendPost();
  }

  _sendPost() {
    // Swal.fire({
    //   title: "Confirmación?",
    //   html: `<b>Compañia:</b> ` + this.getItemsSelect[0].name+`<br>`+
    //         `<b>Refencia: `+ this.numberSelect + this.referencia +`</b>  <br> `    +
    //         `<b>Monto:</b> `+ this.recargaSelect,
    //   icon: "success",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "ACEPTAR"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  }
}
