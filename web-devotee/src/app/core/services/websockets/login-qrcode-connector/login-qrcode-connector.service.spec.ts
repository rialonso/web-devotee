import { TestBed } from '@angular/core/testing';

import { LoginQrcodeConnectorService } from './login-qrcode-connector.service';

describe('LoginQrcodeConnectorService', () => {
  let service: LoginQrcodeConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginQrcodeConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
