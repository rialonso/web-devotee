import { TestBed } from '@angular/core/testing';

import { ChangePasswordService } from './change-password.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangePasswordService', () => {
  let service: ChangePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ChangePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
