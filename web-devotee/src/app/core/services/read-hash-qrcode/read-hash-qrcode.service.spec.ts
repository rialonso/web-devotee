import { TestBed } from '@angular/core/testing';

import { ReadHashQrcodeService } from './read-hash-qrcode.service';

describe('ReadHashQrcodeService', () => {
  let service: ReadHashQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadHashQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
