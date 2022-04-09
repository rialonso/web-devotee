/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TranslateService } from './translate.service';

describe('Service: Translate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateService]
    });
  });

  it('should ...', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));
});
