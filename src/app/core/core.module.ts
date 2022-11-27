import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Textoa20pxDirective } from './directives/textoa20px.directive';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    Textoa20pxDirective,
    PaginaNoEncontradaComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    ToolbarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
