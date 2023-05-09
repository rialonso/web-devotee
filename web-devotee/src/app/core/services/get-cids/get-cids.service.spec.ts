import { TestBed } from '@angular/core/testing';

import { GetCidsService } from './get-cids.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetCidsService', () => {
  let service: GetCidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetCidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
