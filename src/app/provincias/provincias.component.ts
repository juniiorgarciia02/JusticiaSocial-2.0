import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesSqlService } from '../Services/services-sql.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provincias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.scss'
})
export class ProvinciasComponent {

  provincias: any = [];
  usuario: any = [];

  constructor(public http:HttpClient, public serviceSql: ServicesSqlService, public router: Router) { 

   
    let DataUser = JSON.parse(localStorage.getItem('user')!);

      this.serviceSql.getProvincias(DataUser[0].id_user).subscribe( (data:any)=>{
        if( data.length > 0){
          this.provincias = data;
          console.log(data);
        }else{
          this.router.navigateByUrl('');
        }

        
      });
  }

  _irMenu(item: string){
    localStorage.setItem('provincia', JSON.stringify([item]))
    this.router.navigateByUrl('menu');
  }
}
