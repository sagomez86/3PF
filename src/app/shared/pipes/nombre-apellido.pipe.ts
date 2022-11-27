import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../../estudiantes/models/estudiante';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value:Estudiante, ...arg:any[]): string {
    //console.log(value.apellido)
    return value.nombre + " " + value.apellido.toUpperCase();
  }

}
