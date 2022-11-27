import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { AbmUsuarioService } from '../../services/abm-usuario.service';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {

  
  usuario$!: Observable<Usuario>;

  constructor(
    private activateRoute: ActivatedRoute,
    private usuarioService: AbmUsuarioService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.usuario$ = this.usuarioService.obtenerUsuario(id);
    })
  }

}