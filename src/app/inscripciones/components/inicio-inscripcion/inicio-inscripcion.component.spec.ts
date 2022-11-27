import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInscripcionComponent } from './inicio-inscripcion.component';

describe('InicioInscripcionComponent', () => {
  let component: InicioInscripcionComponent;
  let fixture: ComponentFixture<InicioInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
