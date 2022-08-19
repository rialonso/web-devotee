/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignInService } from './sign-in.service';

describe('Service: SignIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInService]
    });
  });

  it('should ...', inject([SignInService], (service: SignInService) => {
    expect(service).toBeTruthy();
  }));
});
