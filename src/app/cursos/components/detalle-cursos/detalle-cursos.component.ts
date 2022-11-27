import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';
import { AbmEstudianteService } from 'src/app/estudiantes/services/abm-estudiante.service';
import { Inscripcion } from 'src/app/inscripciones/models/inscripcion';
import { AbmInscripcionService } from 'src/app/inscripciones/services/abm-inscripcion.service';
import { Curso } from '../../models/curso';
import { AbmCursoService } from '../../services/abm-curso.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {

  curso$!: Observable<Curso>;
  estudiantesCurso: Estudiante[] = []
  idC!: number;
  inscripciones$!: Observable<Inscripcion[]>;
  estudiantesCurso$!: Observable<Estudiante>;
  columnas: string[] = ["estudiante", "accion"];

  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: AbmCursoService,
    private inscripcionService: AbmInscripcionService,
    private estudianteService: AbmEstudianteService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.curso$ = this.cursoService.obtenerCurso(id);
      this.idC = id;
      this.inscripciones$ = this.inscripcionService. obtenerEstudiantesCurso(id);

      this.inscripciones$.subscribe((val) => {
        for (let i of val.values()) {
          id = i.id_estudiante;
          this.estudiantesCurso$ = this.estudianteService.obtenerEstudiante(id);
          this.estudiantesCurso$.subscribe((valor) => {
            this.estudiantesCurso.push(valor);
            console.log('cursosEstudiante', this.estudiantesCurso)
          })
        }
      })
    })
    }

  desincribirEstudianteCurso(idE: number) {
    this.estudiantesCurso = [];
    this.inscripcionService.eliminarInscripcionCursoEstudiante(this.idC, idE);
    }

}