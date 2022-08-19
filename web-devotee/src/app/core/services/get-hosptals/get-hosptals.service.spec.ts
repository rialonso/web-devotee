import { TestBed } from '@angular/core/testing';

import { GetHosptalsService } from './get-hosptals.service';

describe('GetHosptalsService', () => {
  let service: GetHosptalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHosptalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
