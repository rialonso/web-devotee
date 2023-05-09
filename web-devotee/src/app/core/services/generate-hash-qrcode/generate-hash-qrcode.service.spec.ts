import { TestBed } from '@angular/core/testing';

import { GenerateHashQrcodeService } from './generate-hash-qrcode.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenerateHashQrcodeService', () => {
  let service: GenerateHashQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GenerateHashQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
