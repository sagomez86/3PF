import { TestBed } from '@angular/core/testing';

import { AbmEstudianteService } from './abm-estudiante.service';

describe('AbmEstudianteService', () => {
  let service: AbmEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
