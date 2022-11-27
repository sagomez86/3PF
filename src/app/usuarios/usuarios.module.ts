import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { AbmUsuarioService } from './services/abm-usuario.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleUsuariosComponent } from './components/detalle-usuarios/detalle-usuarios.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
    InicioUsuariosComponent,
    DetalleUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  providers:[
    AbmUsuarioService
  ]
})
export class UsuariosModule { }
