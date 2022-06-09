import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataTexts
  languageApp;
  enumLanguage = EnumLanguages;
  constructor(
    private matDialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUserData.IData,
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
    this.languageApp = this.translateService.dataFormatation;
  }
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
}
