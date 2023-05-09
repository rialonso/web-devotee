/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateDataService } from './update-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: UpdateData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDataService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([UpdateDataService], (service: UpdateDataService) => {
    expect(service).toBeTruthy();
  }));
});
