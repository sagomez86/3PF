import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Estudiante } from '../../models/estudiante';
import { AbmEstudianteService } from '../../services/abm-estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
 
  estudiantes$!: Observable<Estudiante[]>;

  columnas: string[] =["nombreCompleto", "edad", "sexo", "accion"];

  constructor(private abmEstudiantesService: AbmEstudianteService,
              private router: Router
              ) { }
  
  ngOnInit(): void {
    this.estudiantes$ = this.abmEstudiantesService.obtenerEstudiantes();
  }

  eliminarEstudiante(id: number) : void {
    this.abmEstudiantesService.eliminarEstudiante(id);
  }

  editarEstudiante(estudiante: Estudiante){
    this.router.navigate(['estudiantes/editar', estudiante]);
  }
  
}
