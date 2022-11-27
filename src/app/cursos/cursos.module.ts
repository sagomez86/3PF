import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { MaterialModule } from '../material.module';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { AbmCursoService } from './services/abm-curso.service';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmEstudianteService } from '../estudiantes/services/abm-estudiante.service';
import { AbmInscripcionService } from '../inscripciones/services/abm-inscripcion.service';



@NgModule({
  declarations: [
    InicioCursosComponent,
    ListaCursosComponent,
    EditarCursosComponent,
    AgregarCursosComponent,
    DetalleCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  providers:[
    AbmEstudianteService,
    AbmInscripcionService,
    AbmCursoService
  ]
})
export class CursosModule { }
