import { TestBed } from '@angular/core/testing';

import { GetSugestionMatchsService } from './get-sugestion-matchs.service';

describe('GetSugestionMatchsService', () => {
  let service: GetSugestionMatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSugestionMatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
