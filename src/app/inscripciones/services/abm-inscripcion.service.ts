import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';
import { Inscripcion } from '../models/inscripcion';

@Injectable()
export class AbmInscripcionService {

  private inscripcionesSubject: BehaviorSubject<Inscripcion[]>;

  inscripciones: Inscripcion[] = [
    {
      id: 1,
      id_estudiante: 1,
      id_curso: 1,
      fechaInscripcion: new Date(),
      id_usuario: 1
    },
    {
      id: 2,
      id_estudiante: 2,
      id_curso: 2,
      fechaInscripcion: new Date(),
      id_usuario: 1
    },
    {
      id: 3,
      id_estudiante: 3,
      id_curso: 3,
      fechaInscripcion: new Date(),
      id_usuario: 1
    }
  ];
  


  constructor() {
    this.inscripcionesSubject = new BehaviorSubject<Inscripcion[]>(this.inscripciones)
  }


  obtenerInscripciones(): Observable<Inscripcion[]> {
    return this.inscripcionesSubject.asObservable()
  }

  obtenerEstudiantesCurso(idC: number): Observable<Inscripcion[]> {
    return this.obtenerInscripciones().pipe(
      map((ins: Inscripcion[]) => ins.filter((ins: Inscripcion) => ins.id_curso === idC)));
  }

  obtenerInscripcionEstudiante(idE: number): Observable<Inscripcion[]> {
    return this.obtenerInscripciones().pipe(
      map((ins: Inscripcion[]) => ins.filter((ins: Inscripcion) => ins.id_estudiante === idE)));
  }

  // Borrar Inscripcion Curso -> Estudiante  && (i.id_estudiante === idE)
  eliminarInscripcionCursoEstudiante(idC: number, idE: number) {

    let indice = this.inscripciones.findIndex((i: Inscripcion) => ((i.id_curso === idC) && (i.id_estudiante === idE)));
    if (indice > -1) {
      this.inscripciones.splice(indice, 1);
    }
    this.inscripcionesSubject.next(this.inscripciones);
  }

  agregarInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
    this.inscripcionesSubject.next(this.inscripciones);
  }


  eliminarInscripcion(id: number) {
    let indice = this.inscripciones.findIndex((i: Inscripcion) => i.id === id);
    if (indice > -1) {
      this.inscripciones.splice(indice, 1);
    }
    this.inscripcionesSubject.next(this.inscripciones);
  }

}
