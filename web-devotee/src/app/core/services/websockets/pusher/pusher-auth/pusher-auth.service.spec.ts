import { TestBed } from '@angular/core/testing';

import { PusherAuthService } from './pusher-auth.service';

describe('PusherAuthService', () => {
  let service: PusherAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PusherAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
