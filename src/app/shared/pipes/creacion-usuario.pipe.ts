import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/usuarios/models/usuario';

@Pipe({
  name: 'creacionUsuario'
})
export class CreacionUsuarioPipe implements PipeTransform {

  transform(value: Usuario, ...args: any[]): string {
    return value.nombre[0].toLocaleLowerCase() + value.apellido.toLowerCase();
  }

}
