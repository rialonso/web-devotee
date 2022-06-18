import { TestBed } from '@angular/core/testing';

import { GetCidsService } from './get-cids.service';

describe('GetCidsService', () => {
  let service: GetCidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
