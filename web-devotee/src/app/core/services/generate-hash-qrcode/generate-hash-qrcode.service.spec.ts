import { TestBed } from '@angular/core/testing';

import { GenerateHashQrcodeService } from './generate-hash-qrcode.service';

describe('GenerateHashQrcodeService', () => {
  let service: GenerateHashQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateHashQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
