import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from './core/services/translate/translate.service';
import { UserProfileService } from './core/services/user-profile/user-profile.service';
import { IAppState } from './state-management/app.model';
import { AddAllDataUser } from './state-management/user-data/user-data.action';
import { IUserData } from './state-management/user-data/user-data.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-devotee';
  constructor(
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private userProfileService: UserProfileService,
    ) {}
  ngOnInit(): void {
    this.translateService.veriyLanguage();
    this.getUserWithoutData();
  }
  async getUserWithoutData() {
    const userId = parseInt(localStorage.getItem('userId'));
    const dataUser: IUserData.RootObject = await this.userProfileService.get(userId).toPromise();
    this.store.dispatch(new AddAllDataUser(dataUser));
  }
}
