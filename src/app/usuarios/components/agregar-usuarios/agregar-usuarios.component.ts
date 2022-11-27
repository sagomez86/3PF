import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbmUsuarioService } from '../../services/abm-usuario.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    usuario: ['',[Validators.required]],
    correo: ['',[Validators.required]],
    contraseña: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
              private abmUsuarioService: AbmUsuarioService,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    let usuario : any = {
      id: Math.round(Math.random()*1000),
      nombre : this.formulario.value.nombre,
      apellido : this.formulario.value.apellido,
      usuario : this.formulario.value.usuario,
      correo : this.formulario.value.correo,
      contraseña : this.formulario.value.contraseña,
    };
      console.log(usuario);
      this.abmUsuarioService.agregarUsuario(usuario);
      this.router.navigate(['usuarios']);
    }
}
