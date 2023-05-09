import { TestBed } from '@angular/core/testing';

import { PlacesAutoCompleteService } from './places-auto-complete.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlacesAutoCompleteService', () => {
  let service: PlacesAutoCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PlacesAutoCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
