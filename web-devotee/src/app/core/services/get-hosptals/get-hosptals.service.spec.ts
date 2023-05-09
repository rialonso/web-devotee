import { TestBed } from '@angular/core/testing';

import { GetHosptalsService } from './get-hosptals.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetHosptalsService', () => {
  let service: GetHosptalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetHosptalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
