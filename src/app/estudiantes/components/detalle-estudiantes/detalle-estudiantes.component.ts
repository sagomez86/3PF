import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { AbmCursoService } from 'src/app/cursos/services/abm-curso.service';
import { Inscripcion } from 'src/app/inscripciones/models/inscripcion';
import { AbmInscripcionService } from 'src/app/inscripciones/services/abm-inscripcion.service';
import { Estudiante } from '../../models/estudiante';
import { AbmEstudianteService } from '../../services/abm-estudiante.service';

@Component({
  selector: 'app-detalle-estudiantes',
  templateUrl: './detalle-estudiantes.component.html',
  styleUrls: ['./detalle-estudiantes.component.css']
})
export class DetalleEstudiantesComponent implements OnInit {

  estudiante$!: Observable<Estudiante>;
  cursosEstudiante: Curso[] = []
  idE!: number;
  inscripciones$!: Observable<Inscripcion[]>;
  cursosEstudiante$!: Observable<Curso>;
  columnas: string[] = ["curso", "accion"];

  constructor(
    private activateRoute: ActivatedRoute,
    private estudianteService: AbmEstudianteService,
    private inscripcionService: AbmInscripcionService,
    private cursoService: AbmCursoService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.estudiante$ = this.estudianteService.obtenerEstudiante(id);
      this.inscripciones$ = this.inscripcionService.obtenerInscripcionEstudiante(id);

      this.inscripciones$.subscribe((val) => {
        for (let i of val.values()) {
          id = i.id_curso;
          this.cursosEstudiante$ = this.cursoService.obtenerCurso(id);
          this.cursosEstudiante$.subscribe((valor) => {
            this.cursosEstudiante.push(valor);
            console.log('cursosEstudiante',this.cursosEstudiante)
          })
        }
      })
    })
  }

  desincribirEstudianteCurso(idC: number): void {
    this.cursosEstudiante = [];
    this.inscripcionService.eliminarInscripcionCursoEstudiante(idC, this.idE);
  }
}