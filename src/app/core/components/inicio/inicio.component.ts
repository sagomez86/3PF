import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private toolbarService: ToolbarService) { }

  ngOnInit(): void {
    this.toolbarService.nombreComponente = " - INICIO"
  }

}
