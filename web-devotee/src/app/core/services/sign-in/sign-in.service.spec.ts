/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignInService } from './sign-in.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: SignIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([SignInService], (service: SignInService) => {
    expect(service).toBeTruthy();
  }));
});
