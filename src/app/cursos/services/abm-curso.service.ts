import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Curso } from '../models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbmCursoService {

  constructor(private http: HttpClient) { 
    
  }

///////////////////////////////  
// Metodos ABM de Curso //
/////////////////////////////// 

// Obtener Lista de cursos
obtenerCursos(): Observable<Curso[]>{
  return this.http.get<Curso[]>(`${environment.api}/cursos`, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
  }).pipe(
    catchError(this.manejarError)
  )
}

// Obtener un curso
obtenerCurso(id: number): Observable<Curso>{
  return this.http.get<Curso>(`${environment.api}/cursos/${id}`, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
  }).pipe(
    catchError(this.manejarError)
  )
}

// Agregar curso
agregarCurso(curso: Curso){
  this.http.post(`${environment.api}/cursos/`, curso, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
  }).pipe(
    catchError(this.manejarError)
  ).subscribe(console.log);
}

// Borrar curso
eliminarCurso(id: number){
  this.http.delete<Curso>(`${environment.api}/cursos/${id}`).pipe(
    catchError(this.manejarError)
  ).subscribe(console.log);
  alert("Registro eliminado"); 
}

// Editar curso
editarCurso(curso: Curso){
  this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso).pipe(
    catchError(this.manejarError)
  ).subscribe(console.log);

}

private manejarError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.warn('Error del lado del cliente', error.error.message);
  }else{
    console.warn('Error del lado del servidor', error.error.message);
  }

  return throwError(() => new Error('Error en la comunicacion HTTP'));
}

}
