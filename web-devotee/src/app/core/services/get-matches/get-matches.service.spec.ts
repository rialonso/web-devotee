import { TestBed } from '@angular/core/testing';

import { GetMatchesService } from './get-matches.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetMatchesService', () => {
  let service: GetMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
