import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbmCursoService } from '../../services/abm-curso.service';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit {

  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    cantidad_horas: [,[Validators.required]],
    cantidad_clases: [,[Validators.required]],
    profesor: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
              private abmCursoService: AbmCursoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregarCurso() {
    let curso : any = {
      id: Math.round(Math.random()*1000),
      nombre : this.formulario.value.nombre,
      cantidad_horas : this.formulario.value.cantidad_horas,
      cantidad_clases : this.formulario.value.cantidad_clases,
      profesor : this.formulario.value.profesor
    };
      console.log(curso)
      this.abmCursoService.agregarCurso(curso);
      this.router.navigate(['cursos']);
    }
}
