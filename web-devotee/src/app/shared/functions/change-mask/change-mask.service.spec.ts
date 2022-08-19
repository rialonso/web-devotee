import { TestBed } from '@angular/core/testing';

import { ChangeMaskService } from './change-mask.service';

describe('ChangeMaskService', () => {
  let service: ChangeMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
