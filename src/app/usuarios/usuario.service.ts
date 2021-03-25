import { Injectable } from '@angular/core';
import {Usuario} from './usuario';
import { Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';



@Injectable()
export class UsuarioService {
  private urlEndPoint:string ='http://localhost:8080/api/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    //return this.http.get<Usuario[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }

}
