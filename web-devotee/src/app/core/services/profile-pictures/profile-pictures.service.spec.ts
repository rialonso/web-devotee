import { TestBed } from '@angular/core/testing';

import { ProfilePicturesService } from './profile-pictures.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfilePicturesService', () => {
  let service: ProfilePicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProfilePicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
