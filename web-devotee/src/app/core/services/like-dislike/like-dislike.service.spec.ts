import { TestBed } from '@angular/core/testing';

import { LikeDislikeService } from './like-dislike.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LikeDislikeService', () => {
  let service: LikeDislikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LikeDislikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
