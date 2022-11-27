import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudiantesComponent } from './components/agregar-estudiantes/agregar-estudiantes.component';
import { DetalleEstudiantesComponent } from './components/detalle-estudiantes/detalle-estudiantes.component';
import { EditarEstudiantesComponent } from './components/editar-estudiantes/editar-estudiantes.component';
import { InicioEstudiantesComponent } from './components/inicio-estudiantes/inicio-estudiantes.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';

const routes: Routes = [
  { path: '', component: InicioEstudiantesComponent, children: [
    { path: '', component: ListaEstudiantesComponent },
    { path: 'editar', component: EditarEstudiantesComponent },
    { path: 'agregar', component: AgregarEstudiantesComponent },
    { path: ':id', component: DetalleEstudiantesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
