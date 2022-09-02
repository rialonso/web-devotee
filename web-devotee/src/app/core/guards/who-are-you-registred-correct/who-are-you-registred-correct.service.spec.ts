import { TestBed } from '@angular/core/testing';

import { WhoAreYouRegistredCorrectService } from './who-are-you-registred-correct.service';

describe('WhoAreYouRegistredCorrectService', () => {
  let service: WhoAreYouRegistredCorrectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoAreYouRegistredCorrectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
