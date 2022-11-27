import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { CreacionUsuarioPipe } from './pipes/creacion-usuario.pipe';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NombreApellidoPipe,
    CreacionUsuarioPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    NombreApellidoPipe,
    CreacionUsuarioPipe,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
