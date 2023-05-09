import { TestBed } from '@angular/core/testing';

import { GetSugestionMatchsService } from './get-sugestion-matchs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetSugestionMatchsService', () => {
  let service: GetSugestionMatchsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetSugestionMatchsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
