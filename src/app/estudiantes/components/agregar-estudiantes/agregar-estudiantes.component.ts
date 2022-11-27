import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbmEstudianteService } from '../../services/abm-estudiante.service';


@Component({
  selector: 'app-agregar-estudiantes',
  templateUrl: './agregar-estudiantes.component.html',
  styleUrls: ['./agregar-estudiantes.component.css']
})
export class AgregarEstudiantesComponent implements OnInit {


  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    edad: [0,[Validators.required]],
    sexo: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
              private abmEstudianteService: AbmEstudianteService,
              private router: Router) { }

  ngOnInit(): void {
  }



  agregarEstudiante() {
    let estudiante : any = {
      id: Math.round(Math.random()*1000),
      nombre : this.formulario.value.nombre,
      apellido : this.formulario.value.apellido,
      edad : this.formulario.value.edad,
      sexo : this.formulario.value.sexo
    };
      console.log(estudiante)
      this.abmEstudianteService.agregarEstudiante(estudiante);
      this.router.navigate(['estudiantes']);
    }
}
