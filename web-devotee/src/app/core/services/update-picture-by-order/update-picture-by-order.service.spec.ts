import { TestBed } from '@angular/core/testing';

import { UpdatePictureByOrderService } from './update-picture-by-order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdatePictureByOrderService', () => {
  let service: UpdatePictureByOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UpdatePictureByOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
