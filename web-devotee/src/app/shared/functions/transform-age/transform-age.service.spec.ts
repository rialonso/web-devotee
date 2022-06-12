import { TestBed } from '@angular/core/testing';

import { TransformAgeService } from './transform-age.service';

describe('TransformAgeService', () => {
  let service: TransformAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
