import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dataTexts
  languageApp;
  enumLanguage = EnumLanguages;
  age;

  urlImages = environment.urlImages;
  constructor(
    private matDialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUserData.IData,
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
    this.languageApp = this.translateService.dataFormatation;
    this.transformAge();
  }
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
  transformAge() {
    const birthdate = this.data.birthdate.replace(/-/g, '')
    const year = Number(birthdate.substr(0, 4));
    const today = new Date();
    const month = Number(birthdate.substr(4, 2)) - 1;
    const day = Number(birthdate.substr(6, 2));
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    this.age = age;
  }
}
