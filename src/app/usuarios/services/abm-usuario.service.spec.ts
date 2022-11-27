import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AbmUsuarioService } from './abm-usuario.service';
import { of } from 'rxjs';
import { Usuario } from '../models/usuario';

describe('AbmUsuarioService', () => {
  let httpClientSpy:{get: jasmine.Spy};
  let service: AbmUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AbmUsuarioService(httpClientSpy as any);
  });

  fit('El servicio se instancia correctamente.', () => {
    expect(service).toBeTruthy();
  });

  fit('El servicio retorna un arreglo de usuarios mockeados.', (done: DoneFn) => {
    const mockDatos: jasmine.Expected<jasmine.ArrayLike<Usuario>> | jasmine.ArrayContaining<Usuario> = [
      {"nombre":"Ashlynn","apellido":"Bailey","usuario":"Carter15","correo":"Phyllis_Rodriguez84@gmail.com","contrasena":"Karakachan dog","admin":true,"id":2},
      {"nombre":"Jalyn","apellido":"Shawn","usuario":"Gerda_Gerhold15","correo":"Cory91@yahoo.com","contrasena":"Scottish Deerhound","admin":false,"id":3} 
      ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuarios().subscribe((usuarios) => {
      expect(usuarios).toEqual(mockDatos);
      done();
    } )
  });

});
