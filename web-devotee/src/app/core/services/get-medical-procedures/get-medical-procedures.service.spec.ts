import { TestBed } from '@angular/core/testing';

import { GetMedicalProceduresService } from './get-medical-procedures.service';

describe('GetMedicalProceduresService', () => {
  let service: GetMedicalProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMedicalProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
