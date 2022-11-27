import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { DetalleUsuariosComponent } from './components/detalle-usuarios/detalle-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', component: InicioUsuariosComponent, children: [
    { path: '', component: ListaUsuariosComponent },
    { path: 'editar', component: EditarUsuariosComponent },
    { path: 'agregar', component: AgregarUsuariosComponent },
    { path: ':id', component: DetalleUsuariosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
