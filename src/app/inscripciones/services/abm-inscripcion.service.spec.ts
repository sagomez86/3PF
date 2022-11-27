import { TestBed } from '@angular/core/testing';

import { AbmInscripcionService } from './abm-inscripcion.service';

describe('AbmInscripcionService', () => {
  let service: AbmInscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmInscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
