import { TestBed } from '@angular/core/testing';

import { UpdatePictureByOrderService } from './update-picture-by-order.service';

describe('UpdatePictureByOrderService', () => {
  let service: UpdatePictureByOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePictureByOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
