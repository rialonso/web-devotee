import { TestBed } from '@angular/core/testing';

import { TermsOfUseServiceEn, TermsOfUseServicePt } from './terms-of-use.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TermsOfUseService', () => {
  let servicePt: TermsOfUseServicePt;
  let serviceEn: TermsOfUseServiceEn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    servicePt = TestBed.inject(TermsOfUseServicePt);
    serviceEn = TestBed.inject(TermsOfUseServiceEn);

  });

  it('should be created', () => {
    expect(servicePt).toBeTruthy();
    expect(serviceEn).toBeTruthy();

  });
});
