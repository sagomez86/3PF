import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../../models/estudiante';
import { AbmEstudianteService } from '../../services/abm-estudiante.service';

@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar-estudiantes.component.html',
  styleUrls: ['./editar-estudiantes.component.css']
})
export class EditarEstudiantesComponent implements OnInit {

  id!: number;

  formulario!: FormGroup;
  
  constructor( 
    private fb: FormBuilder,
    private abmEstudianteService: AbmEstudianteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup( {
      nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
      apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
      edad: new FormControl(parametros.get('edad'), [Validators.required]),
      curso: new FormControl(parametros.get('curso'), [Validators.required]),
      })
    }    
    )
  }

  editarEstudiante() {
    let e: any = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      curso: this.formulario.value.curso,
    }
    this.abmEstudianteService.editarEstudiante(e);
      this.router.navigate(['estudiantes'])
  }

}
