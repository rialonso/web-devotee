import { TestBed } from '@angular/core/testing';

import { GetMedicinesService } from './get-medicines.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetMedicinesService', () => {
  let service: GetMedicinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetMedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
