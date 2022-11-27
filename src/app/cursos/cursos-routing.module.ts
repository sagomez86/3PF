import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: '', component: InicioCursosComponent, children: [
    { path: '', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursosComponent },
    { path: 'agregar', component: AgregarCursosComponent },
    { path: ':id', component: DetalleCursosComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
