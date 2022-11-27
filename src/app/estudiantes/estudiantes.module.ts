import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { InicioEstudiantesComponent } from './components/inicio-estudiantes/inicio-estudiantes.component';
import { EditarEstudiantesComponent } from './components/editar-estudiantes/editar-estudiantes.component';
import { AgregarEstudiantesComponent } from './components/agregar-estudiantes/agregar-estudiantes.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { AbmEstudianteService } from './services/abm-estudiante.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleEstudiantesComponent } from './components/detalle-estudiantes/detalle-estudiantes.component';
import { AbmInscripcionService } from '../inscripciones/services/abm-inscripcion.service';
import { AbmCursoService } from '../cursos/services/abm-curso.service';




@NgModule({
  declarations: [
    InicioEstudiantesComponent,
    EditarEstudiantesComponent,
    AgregarEstudiantesComponent,
    ListaEstudiantesComponent,
    DetalleEstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule
  ],
  providers:[
    AbmEstudianteService,
    AbmInscripcionService,
    AbmCursoService
  ]
  
})
export class EstudiantesModule { }
