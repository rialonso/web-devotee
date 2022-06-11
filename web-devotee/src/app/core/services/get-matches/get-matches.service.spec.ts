import { TestBed } from '@angular/core/testing';

import { GetMatchesService } from './get-matches.service';

describe('GetMatchesService', () => {
  let service: GetMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
