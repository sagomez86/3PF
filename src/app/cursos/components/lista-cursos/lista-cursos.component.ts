import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../../models/curso';
import { AbmCursoService } from '../../services/abm-curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

 
  cursos$!: Observable<Curso[]>;

  columnas: string[] =["nombre", "cantidad_horas", "cantidad_clases", "profesor", "accion"];

  constructor(private abmCursoService: AbmCursoService,
              private router: Router
              ) { }
  
  ngOnInit(): void {
    this.cursos$ = this.abmCursoService.obtenerCursos();
  }

  eliminarCurso(id: number) : void {
    this.abmCursoService.eliminarCurso(id);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
  
}
