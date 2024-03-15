import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesSqlService } from '../Services/services-sql.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   usuario: string = '';
   contrasena: string ='';

  constructor(private router: Router, public sqlService: ServicesSqlService) {
    localStorage.removeItem('Router');
    localStorage.removeItem('provincia');
    localStorage.removeItem('user');
  }


  _Entrar(){

    this.sqlService.getUsuario(this.usuario, this.contrasena).subscribe( (data: any)=>{
      
      if(data.length > 0){
        if( data[0].usuario == this.usuario && data[0].password == this.contrasena){
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigateByUrl('/provincias');
        }else{
          return;
        }
        
      }
    });
    // this.router.navigateByUrl('/provincias');
  }
}
