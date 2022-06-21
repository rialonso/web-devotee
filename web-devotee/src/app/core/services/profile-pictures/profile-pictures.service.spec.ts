import { TestBed } from '@angular/core/testing';

import { ProfilePicturesService } from './profile-pictures.service';

describe('ProfilePicturesService', () => {
  let service: ProfilePicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
