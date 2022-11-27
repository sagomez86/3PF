import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/core/services/toolbar.service';

@Component({
  selector: 'app-inicio-usuarios',
  templateUrl: './inicio-usuarios.component.html',
  styleUrls: ['./inicio-usuarios.component.css']
})
export class InicioUsuariosComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbarService.nombreComponente = " - USUARIOS"
  }
}