import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { environment } from 'src/environments/environment';
import { TransformAgeService } from 'src/app/shared/functions/transform-age/transform-age.service';
import { State } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: number;
  dataTexts
  languageApp;
  enumLanguage = EnumLanguages;
  age;

  urlImages = environment.urlImages;
  destroy$ = new ReplaySubject();
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUserData.IData,
    private translateService: TranslateService,
    private dialogsService: DialogsService,
    private transformAgeService: TransformAgeService

  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
    this.userId = this.state.getValue().userData?.data?.id;
    this.languageApp = this.translateService.dataFormatation;
    this.transformAge();
  }
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
  transformAge() {
    if (this.data?.birthdate) {
      this.age = this.transformAgeService.transformAge(this.data?.birthdate);
    }

  }
  openEditProfilePicture() {
    this.dialogsService
    .openEditProfilePicture()
    .afterClosed()
    .subscribe(res => {
      this.checkWhoCloseModal(res);
    });;
  }
  openEditAboutMe() {
    this.dialogsService
      .openEditAboutMe()
      .afterClosed()
      .subscribe(res => {
        this.checkWhoCloseModal(res);
      });
  }
  checkWhoCloseModal(who) {
    if (who === 'saved') {
      this.matDialogRef.close(who);
    }
  }
}
