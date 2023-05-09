import { TestBed } from '@angular/core/testing';

import { VerifyEmailService } from './verify-email.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerifyEmailService', () => {
  let service: VerifyEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VerifyEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
