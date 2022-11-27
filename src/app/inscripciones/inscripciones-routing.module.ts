import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { DetalleInscripcionesComponent } from './components/detalle-inscripciones/detalle-inscripciones.component';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';
import { InicioInscripcionComponent } from './components/inicio-inscripcion/inicio-inscripcion.component';
import { ListarInscripcionComponent } from './components/listar-inscripcion/listar-inscripcion.component';

const routes: Routes = [
  {
    path: '', component: InicioInscripcionComponent, children: [
      { path: '', component: ListarInscripcionComponent },
      { path: 'editar', component: EditarInscripcionComponent },
      { path: 'agregar', component: AgregarInscripcionComponent },
      { path: ':id', component: DetalleInscripcionesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
