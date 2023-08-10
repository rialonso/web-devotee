import { UserProfileService } from './../../core/services/user-profile/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { IAppState } from 'src/app/state-management/app.model';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { ChangePasswordService } from 'src/app/core/services/change-password/change-password.service';
import { ReplaySubject } from 'rxjs';
import { takeUntil, filter, pairwise } from 'rxjs/operators';
import { ModelChangePassword } from 'src/app/shared/model/change-password/change-password.model';
import { NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.component.html',
  styleUrls: ['./user-configurations.component.scss']
})
export class UserConfigurationsComponent implements OnInit {
  dataTexts;
  enumRoutes = EnumRoutesApplication;

  loading = false;
  lastUrl: string;
  destroy$ = new ReplaySubject();
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private dialogService: DialogsService,
    private userProfileService: UserProfileService,
    private routeService: RouteService,
    private stateManagementFuncService: StateManagementFuncService,
    private snackBarService: SnackBarService,
  ) {
   }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
  }
  viewMyProfile() {
    const userData = this.state.getValue().userData.data;
    this.dialogService
      .openProfile(userData)
      .afterClosed()
      .subscribe(async res => {
        if(res === 'saved') {
          this.loading = true;
          const data  = await this.userProfileService.get(userData.id).toPromise();
          this.stateManagementFuncService.funcAddAllDataUser(data);
          this.viewMyProfile();
          this.loading = false;
          this.snackBarService.openSnackbarSuccess(
            this.dataTexts.snacksBars.successSavedUserData.mensage,
            this.dataTexts.snacksBars.successSavedUserData.button,
          )
        }
      });
  }
  navigateTo(route: string) {
    this.routeService.navigateToURL(route)
  }
  logout() {
    localStorage.clear();
    window.location.href = this.enumRoutes.LOGIN;
  }
  deleteAccount() {
    this.dialogService
    .openDeleteAccount()
    .afterClosed()
    .pipe(takeUntil(this.destroy$))
    .subscribe((closed: any) => {

    })
  }
  changePassword() {
    this.dialogService
      .openChangePassword()
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((closed: ModelChangePassword) => {

      })
  }
  devoteePlus() {
    this.dialogService
      .openDevoteePlus()
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((closed: ModelChangePassword) => {

      })
  }
  return() {
    this.navigateTo(EnumRoutesApplication.MATCHS);
  }
}
