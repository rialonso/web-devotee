import { TestBed } from '@angular/core/testing';

import { ReadHashQrcodeService } from './read-hash-qrcode.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReadHashQrcodeService', () => {
  let service: ReadHashQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ReadHashQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
