import { TestBed } from '@angular/core/testing';

import { GetMedicinesService } from './get-medicines.service';

describe('GetMedicinesService', () => {
  let service: GetMedicinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
