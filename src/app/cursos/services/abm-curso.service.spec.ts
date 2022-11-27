import { TestBed } from '@angular/core/testing';

import { AbmCursoService } from './abm-curso.service';

describe('AbmCursoService', () => {
  let service: AbmCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
