import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Estudiante } from '../models/estudiante';
import { environment } from 'src/environments/environment';

@Injectable()
export class AbmEstudianteService {

  constructor(private http: HttpClient) {

  }

  ///////////////////////////////  
  // Metodos ABM de Estudiante //
  /////////////////////////////// 

  // Obtener Lista de Estudiantes
  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${environment.api}/estudiantes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  // Obtener un Estudiante
  obtenerEstudiante(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${environment.api}/estudiantes/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  // Agregar Estudiante
  agregarEstudiante(estudiante: Estudiante) {
    this.http.post(`${environment.api}/estudiantes/`, estudiante, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  // Borrar Estudiante
  eliminarEstudiante(id: number) {
    this.http.delete<Estudiante>(`${environment.api}/estudiantes/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado");
  }

  // Editar Estudiante
  editarEstudiante(estudiante: Estudiante) {
    this.http.put<Estudiante>(`${environment.api}/estudiantes/${estudiante.id}`, estudiante).pipe(
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
