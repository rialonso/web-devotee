import { TestBed } from '@angular/core/testing';

import { GetAddressLatLongService } from './get-address-lat-long.service';

describe('GetAddressLatLongService', () => {
  let service: GetAddressLatLongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAddressLatLongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
