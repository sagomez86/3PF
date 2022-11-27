import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { ToolbarService } from 'src/app/core/services/toolbar.service';

@Component({
  selector: 'app-inicio-estudiantes',
  templateUrl: './inicio-estudiantes.component.html',
  styleUrls: ['./inicio-estudiantes.component.css']
})
export class InicioEstudiantesComponent implements OnInit {

  constructor(
    private sesion: SesionService,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbarService.nombreComponente = " - ESTUDIANTES"
  }

}
