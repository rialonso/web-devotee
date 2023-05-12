import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { TranslateService } from './core/services/translate/translate.service';
import { UserProfileService } from './core/services/user-profile/user-profile.service';
import { IAppState } from './state-management/app.model';
import { AddAllDataUser } from './state-management/user-data/user-data.action';
import { IUserData } from './state-management/user-data/user-data.state';

/**
 * Continue AppComponent
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**title aplication */
  title = 'web-devotee';
  /** boolean to activated loading */
  loading = false;
    /**
     * The "constructor"
     */
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private userProfileService: UserProfileService,
    ) {}
    /**
     * onInit"
     */
  ngOnInit(): void {
    this.translateService.veriyLanguage();
    this.getUserWithoutData();
  }
  /**
  * getUser without data, search userID
  */
  async getUserWithoutData() {
    if (localStorage.getItem('userId') ) {
      this.loading = true;
      const userId = parseInt(localStorage.getItem('userId'));
      const dataUser: IUserData.RootObject = await this.userProfileService.get(userId).toPromise();
      this.store.dispatch(new AddAllDataUser(dataUser));
      this.loading = false;
    }
  }
}
