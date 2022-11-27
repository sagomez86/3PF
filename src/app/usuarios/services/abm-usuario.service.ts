import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbmUsuarioService {

  constructor( private http: HttpClient ) {

  };


  ///////////////////////////////  
  // Metodos ABM de usuario /////
  /////////////////////////////// 

  // Obtener Lista de usuarios
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  // Obtener un usuario
  obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  // Agregar usuario
  agregarUsuario(usuario: Usuario) {
    this.http.post(`${environment.api}/usuarios/`, usuario, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  // Borrar usuario
  eliminarUsuario(id: number) {
    this.http.delete<Usuario>(`${environment.api}/usuarios/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado");
  }

  // Editar usuario
  editarUsuario(usuario: Usuario) {
    this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error del lado del cliente', error.error.message);
    } else {
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
