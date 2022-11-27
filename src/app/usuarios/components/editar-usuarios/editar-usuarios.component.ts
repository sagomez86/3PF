import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmUsuarioService } from '../../services/abm-usuario.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  
  id!: number;

  formulario!: FormGroup;
  
  constructor( 
    private fb: FormBuilder,
    private abmUsuarioService: AbmUsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup( {
      nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
      apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
      usuario: new FormControl(parametros.get('usuario'), [Validators.required]),
      correo: new FormControl(parametros.get('correo'), [Validators.required]),
      contraseña: new FormControl(parametros.get('contraseña'), [Validators.required]),
      })
    }    
    )
  }

  editarUsuario() {
    let u: any = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      usuario: this.formulario.value.usuario,
      correo: this.formulario.value.correo,
      contraseña: this.formulario.value.contraseña,
    }
    this.abmUsuarioService.editarUsuario(u);
      this.router.navigate(['usuarios'])
  }

}
