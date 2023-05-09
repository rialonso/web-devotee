import { TestBed } from '@angular/core/testing';

import { GetAddressLatLongService } from './get-address-lat-long.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetAddressLatLongService', () => {
  let service: GetAddressLatLongService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [

      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetAddressLatLongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
