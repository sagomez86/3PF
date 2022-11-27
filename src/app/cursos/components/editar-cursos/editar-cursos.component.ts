import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmCursoService } from '../../services/abm-curso.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

 
  id!: number;

  formulario!: FormGroup;
  
  constructor( 
    private fb: FormBuilder,
    private abmCursoService: AbmCursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup( {
      nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
      cantidad_horas: new FormControl(parametros.get('cantidad_horas'), [Validators.required]),
      cantidad_clases: new FormControl(parametros.get('cantidad_clases'), [Validators.required]),
      profesor: new FormControl(parametros.get('profesor'), [Validators.required]),
      })
    }    
    )
  }

  editarCurso() {
    let e: any = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      cantidad_horas: this.formulario.value.cantidad_horas,
      cantidad_clases: this.formulario.value.cantidad_clases,
      profesor: this.formulario.value.profesor,
    }
    this.abmCursoService.editarCurso(e);
      this.router.navigate(['cursos'])
  }

}
