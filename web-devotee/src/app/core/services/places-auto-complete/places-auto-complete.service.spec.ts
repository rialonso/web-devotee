import { TestBed } from '@angular/core/testing';

import { PlacesAutoCompleteService } from './places-auto-complete.service';

describe('PlacesAutoCompleteService', () => {
  let service: PlacesAutoCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesAutoCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
