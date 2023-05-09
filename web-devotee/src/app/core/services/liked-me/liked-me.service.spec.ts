import { TestBed } from '@angular/core/testing';

import { LikedMeService } from './liked-me.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LikedMeService', () => {
  let service: LikedMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LikedMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
