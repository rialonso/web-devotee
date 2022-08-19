import { TestBed } from '@angular/core/testing';

import { VerifyStageRegisterDataService } from './verify-stage-register-data.service';

describe('VerifyStageRegisterDataService', () => {
  let service: VerifyStageRegisterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyStageRegisterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
