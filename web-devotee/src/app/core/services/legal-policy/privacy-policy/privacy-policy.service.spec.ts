import { TestBed } from '@angular/core/testing';
import { PrivacyPolicyServiceEn, PrivacyPolicyServicePt } from './privacy-policy.service';


describe('PrivacyPolicyService', () => {
  let servicePt: PrivacyPolicyServicePt;
  let serviceEn: PrivacyPolicyServiceEn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicePt = TestBed.inject(PrivacyPolicyServicePt);
    serviceEn = TestBed.inject(PrivacyPolicyServiceEn);

  });

  it('should be created', () => {
      expect(servicePt).toBeTruthy();
      expect(serviceEn).toBeTruthy();

  });
});
