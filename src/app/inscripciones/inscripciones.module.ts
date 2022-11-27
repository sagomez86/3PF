import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { ListarInscripcionComponent } from './components/listar-inscripcion/listar-inscripcion.component';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';
import { InicioInscripcionComponent } from './components/inicio-inscripcion/inicio-inscripcion.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AbmInscripcionService } from './services/abm-inscripcion.service';
import { AbmEstudianteService } from '../estudiantes/services/abm-estudiante.service';
import { AbmCursoService } from '../cursos/services/abm-curso.service';



@NgModule({
  declarations: [
    AgregarInscripcionComponent,
    ListarInscripcionComponent,
    EditarInscripcionComponent,
    InicioInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule
  ],
  providers:[
    AbmInscripcionService,
    AbmEstudianteService,
    AbmCursoService
  ]
})
export class InscripcionesModule { }
