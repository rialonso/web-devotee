import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { TermsOfUseServiceEn, TermsOfUseServicePt } from 'src/app/core/services/legal-policy/terms-of-user/terms-of-use.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';

@Component({
  selector: 'app-use-of-terms',
  templateUrl: './use-of-terms.component.html',
  styleUrls: ['./use-of-terms.component.scss']
})
export class UseOfTermsComponent implements OnInit {
  loading = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<UseOfTermsComponent>,
    private termsOfUseServicePt: TermsOfUseServicePt,
    private termsOfUseServiceEn: TermsOfUseServiceEn,


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
      termsResponse = await this.termsOfUseServiceEn.get().toPromise();
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
    termsResponse = await this.termsOfUseServicePt.get().toPromise();
    this.data = termsResponse.data.value
    this.loading = false;
    return termsResponse.data.value;
  }
}
