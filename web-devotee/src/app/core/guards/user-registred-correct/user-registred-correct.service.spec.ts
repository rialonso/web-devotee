import { TestBed } from '@angular/core/testing';

import { UserRegistredCorrectService } from './user-registred-correct.service';

describe('UserRegistredCorrectService', () => {
  let service: UserRegistredCorrectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistredCorrectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
