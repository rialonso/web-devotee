import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { PrivacyPolicyServiceEn, PrivacyPolicyServicePt } from 'src/app/core/services/legal-policy/privacy-policy/privacy-policy.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<PrivacyPolicyComponent>,
    private privacyPolicyServicePt: PrivacyPolicyServicePt,
    private privacyPolicyServiceEn: PrivacyPolicyServiceEn,
  ) { }

  ngOnInit(): void {
    this.getTerms();
  }
  closeModal() {
    this.matDialogRef.close();
  }
  async getTerms() {
    this.loading = true;

    let termsResponse;
    if(this.translateService.dataFormatation === EnumLanguages.US) {
      termsResponse = await this.privacyPolicyServiceEn.get().toPromise();
      if(termsResponse?.data?.value !== "") {
        this.data = termsResponse.data.value
        this.loading = false;

        return termsResponse.data.value;
      } else {
        this.getTermsOfUsePt();
      }
    }
    this.getTermsOfUsePt();
  }
  async getTermsOfUsePt() {
    let termsResponse;
    termsResponse = await this.privacyPolicyServicePt.get().toPromise();
    this.data = termsResponse.data.value
    this.loading = false;

    return termsResponse.data.value;
  }

}
