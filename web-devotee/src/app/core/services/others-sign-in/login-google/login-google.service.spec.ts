import { TestBed } from '@angular/core/testing';

import { LoginGoogleService } from './login-google.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginGoogleService', () => {
  let service: LoginGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LoginGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
