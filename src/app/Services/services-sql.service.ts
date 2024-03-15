import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesSqlService {
    url ='localhost'
    puerto = '';
    private Url: string;
  

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost/JSApi/Consultas/';
  }

  getUsuario(usuario: string, password:string) {
    return this.http.post(this.Url+'getUsuario.php', {'usuario':usuario, 'contrasena': password});
  }

  getProvincias(id?: string) {
    return this.http.post(this.Url+'buscarDetalleUsuarioId.php', {ID:id});
  }

  getSupervisores(id?: string) {
    return this.http.post(this.Url+'buscarDetalleSupervisor.php', {ID:id});
  }

  
}
          