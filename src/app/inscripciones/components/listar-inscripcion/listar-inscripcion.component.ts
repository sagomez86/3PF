import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estudiante } from 'src/app/estudiantes/models/estudiante';
import { AbmEstudianteService } from 'src/app/estudiantes/services/abm-estudiante.service';
import { Inscripcion } from '../../models/inscripcion';
import { AbmInscripcionService } from '../../services/abm-inscripcion.service';

@Component({
  selector: 'app-listar-inscripcion',
  templateUrl: './listar-inscripcion.component.html',
  styleUrls: ['./listar-inscripcion.component.css']
})
export class ListarInscripcionComponent implements OnInit {

  estudiantes$!:Observable<Estudiante[]>;
  inscripciones$!: Observable<Inscripcion[]>;
  inscripcionesPosta$!: Observable<any[]>;

  columnas: string[] =["id_estudiante", "id_curso", "fechaInscripcion", "id_usuario", "accion"];

  constructor(private abmInscripcionesService: AbmInscripcionService,
              private abmEstudianteService: AbmEstudianteService,
              private router: Router
              ) { }
  
  ngOnInit(): void {
    this.estudiantes$ = this.abmEstudianteService.obtenerEstudiantes();
    this.inscripciones$ = this.abmInscripcionesService.obtenerInscripciones();
    this.inscripciones$.subscribe((val) => {
      console.log(val)
    })
  }

  eliminarInscripcion(id: number) : void {
    this.abmInscripcionesService.eliminarInscripcion(id);
  }

  editarInscripcion(inscripcion: Inscripcion){
    this.router.navigate(['inscripciones/editar', inscripcion]);
  }
  
}