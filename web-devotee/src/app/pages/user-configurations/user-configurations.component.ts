import { UserProfileService } from './../../core/services/user-profile/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.component.html',
  styleUrls: ['./user-configurations.component.scss']
})
export class UserConfigurationsComponent implements OnInit {
  dataTexts;
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private dialogService: DialogsService,
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
  }
  viewMyProfile() {
    const userData = this.state.getValue().userData.data;
    this.dialogService.openProfile(userData);
  }
}
