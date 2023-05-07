import { TestBed } from '@angular/core/testing';

import { CalculateHoursAgoService } from './calculate-hours-ago.service';

describe('CalculateHoursAgoService', () => {
  let service: CalculateHoursAgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateHoursAgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
