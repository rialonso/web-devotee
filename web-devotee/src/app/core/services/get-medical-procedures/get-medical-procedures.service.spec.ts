import { TestBed } from '@angular/core/testing';

import { GetMedicalProceduresService } from './get-medical-procedures.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetMedicalProceduresService', () => {
  let service: GetMedicalProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetMedicalProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
