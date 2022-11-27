import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/core/services/toolbar.service';

@Component({
  selector: 'app-inicio-cursos',
  templateUrl: './inicio-cursos.component.html',
  styleUrls: ['./inicio-cursos.component.css']
})
export class InicioCursosComponent implements OnInit {

  nombreComponente:string = " - USUARIOS";

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbarService.nombreComponente = " - CURSOS"
  }

}
