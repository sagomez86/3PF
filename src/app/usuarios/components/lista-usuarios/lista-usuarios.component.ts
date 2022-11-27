import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { AbmUsuarioService } from '../../services/abm-usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios$!: Observable<Usuario[]>;

  columnas: string[] =["nombreCompleto", "usuario", "correo", "accion"];

  constructor(private abmUsuariosService: AbmUsuarioService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.usuarios$ = this.abmUsuariosService.obtenerUsuarios();
  }

  eliminarUsuario(id: number) : void {
    this.abmUsuariosService.eliminarUsuario(id);
  }

  editarUsuario(usuario: Usuario){
    this.router.navigate(['usuarios/editar', usuario]);
  }
}

