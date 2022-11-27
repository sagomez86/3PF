import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/core/services/toolbar.service';


@Component({
  selector: 'app-inicio-inscripcion',
  templateUrl: './inicio-inscripcion.component.html',
  styleUrls: ['./inicio-inscripcion.component.css']
})
export class InicioInscripcionComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }


  ngOnInit(): void {
    this.toolbarService.nombreComponente = " - INSCRIPCIONES"
  }


}
