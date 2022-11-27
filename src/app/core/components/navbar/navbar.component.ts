import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../services/sesion.service';
import { ToolbarService } from '../../services/toolbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
prueba() {
  this.toolbarService.nombreComponente = "INICIO";
}


  sesion$!: Observable<Sesion>;
  

  constructor(
    private sesionService: SesionService,
    private toolbarService: ToolbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  logout() {
    this.sesionService.logout(),
    this.sesion$.subscribe((values) => {console.log(values)}),
    this.router.navigate(['login']);
    }

  //opcionesMenu: string[] = ['Alumnos', 'Cursos', 'Clases'];

}
