import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SesionService } from '../../services/sesion.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit, OnDestroy {

  nombreComponenteActual!: string;
  nombreUsuario?:string;
  subscription : Subscription;


  constructor(
    public toolbarService: ToolbarService,
    private sesion: SesionService
  ) { 
    this.subscription= this.sesion.obtenerSesion().subscribe((values) => {
      this.nombreUsuario = values.usuarioActivo?.usuario;
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.nombreComponenteActual = this.toolbarService.nombreComponente
  }  

    
  }

