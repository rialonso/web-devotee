import { TestBed } from '@angular/core/testing';

import { GetSelectsSpecialPersonService } from './get-selects-special-person.service';

describe('GetSelectsSpecialPersonService', () => {
  let service: GetSelectsSpecialPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSelectsSpecialPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
