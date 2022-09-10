import { TestBed } from '@angular/core/testing';

import { LikedMeService } from './liked-me.service';

describe('LikedMeService', () => {
  let service: LikedMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
