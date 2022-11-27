import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  sesionSubject!: BehaviorSubject<Sesion>;
  nombreComponente!:string;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: string, contrasena: string, admin: boolean) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin: admin,
        id: 1,
        nombre: 'default',
        apellido: 'default',
        correo: 'default',
      }
    }

    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Sesion> {
    return this.sesionSubject.asObservable();
  }

  logout() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject.next(sesion);
  }

}
