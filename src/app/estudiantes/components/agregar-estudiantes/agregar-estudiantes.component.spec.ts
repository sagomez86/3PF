import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AgregarEstudiantesComponent } from './agregar-estudiantes.component';

describe('AgregarEstudiantesComponent', () => {
  let component: AgregarEstudiantesComponent;
  let fixture: ComponentFixture<AgregarEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstudiantesComponent ],
      imports:[ 
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  fit('El formulario Estudiante es invalido', () => {
    const formularioE = component.formulario;
    const nombre = formularioE.controls['nombre'];

    nombre.setValue('Santiago');

    expect(formularioE.invalid).toBeFalse();  
  });

  fit('El formulario Estudiante es valido', () => {
    const formularioE = component.formulario;
    const nombre = formularioE.controls['nombre'];
    const apellido = formularioE.controls['apellido'];
    const edad = formularioE.controls['edad'];
    const sexo = formularioE.controls['sexo'];

    nombre.setValue('Santiago');
    apellido.setValue('Gomez');
    edad.setValue(32);
    sexo.setValue('M');

    expect(formularioE.valid).toBeTrue();  
  });

  it('Se renderiza el objeto de estudiantes cuando doy click al boton Agregar', () => {
    const formularioE = component.formulario;
    const nombre = formularioE.controls['nombre'];
    const apellido = formularioE.controls['apellido'];
    const edad = formularioE.controls['edad'];
    const sexo = formularioE.controls['sexo'];

    nombre.setValue('Santiago');
    apellido.setValue('Gomez');
    edad.setValue(32);
    sexo.setValue('M');

    const boton= fixture.debugElement.query(By.css('#btnAgregar'))
    boton.nativeElement.click()
    fixture.detectChanges()

    //expect(formularioE.valid).toBeTrue();  
  });

});
