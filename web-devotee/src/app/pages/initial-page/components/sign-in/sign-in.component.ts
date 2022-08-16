import { INIT_DATA_ERRORS } from './../../../../shared/enum/errors/errors.enum';
import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { takeUntil } from 'rxjs/operators';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { SignInService } from 'src/app/core/services/sign-in/sign-in.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginQrCodeComponent } from 'src/app/shared/components/dialogs/login-qr-code/login-qr-code.component';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { ModelErrors } from 'src/app/shared/model/errors/errors.model';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ISignInGoogle } from 'src/app/shared/model/others-sign-in/sign-in.model';
import { LoginGoogleService } from 'src/app/core/services/others-sign-in/login-google/login-google.service';
import { VerifyStageRegisterDataService } from 'src/app/shared/functions/verify-stage-register-data/verify-stage-register-data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = false;
  loading = false;

  dataTexts;
  routesEnum = EnumRoutesApplication;

  formGroup: FormGroup;

  showErrorCredentials: ModelErrors = INIT_DATA_ERRORS;

  destroy$ = new ReplaySubject();
  constructor(
    public routeService: RouteService,
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private signInService: SignInService,
    private formBuilder: FormBuilder,
    private stateManagementFuncServices: StateManagementFuncService,
    private dialogsService: DialogsService,
    private userProfileService: UserProfileService,
    private socialAuthService: SocialAuthService,
    private loginGoogleService: LoginGoogleService,
    private verifyStageRegisterDataService: VerifyStageRegisterDataService,

  ) {
    this.store.select('controlsApp')
      .pipe(takeUntil(this.destroy$))
      .subscribe((controlsApp: any) => {
        this.changeOpenMenuMobile(controlsApp.openSingIn);
      });
  }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initiForm();
  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }
  clickopenMobileSignIn(openSignIn: boolean): void {
    this.store.dispatch(new AddControlApp({ openSingIn: openSignIn }));
  }
  navigateTo(route): void {
    this.routeService.navigateToURL(route);
  }
  openQrSignIn() {
    this.dialogsService.openQrCodeSignIn();
  }
  openTerms() {

  }
  openPrivacy() {

  }
  async signIn() {
    this.loading = true;
    if (this.formGroup.valid) {
      const signInData: IUserData.RootObject = await this.signInService.post(this.formGroup.value).toPromise();
      if (signInData?.status) {
        const userProfile: IUserData.RootObject = await this.userProfileService.get(signInData.data.id).toPromise();
        this.stateManagementFuncServices.funcAddAllDataUser({access_token: signInData.access_token, ...userProfile});
        this.navigateTo(EnumRoutesApplication.MATCHS);
      } else {
        this.showErrorCredentials
        = new ModelErrors(
          !signInData.status,
           this.dataTexts.errors.credentials
        );
      }
      this.loading = false;
    }
  }

  private initiForm() {
    this.formGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
        ]
      ]
    })
  }
async loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(async (res) => {
      console.log(res);
      const dataToLoginGoogle = new ISignInGoogle(
        res.email,
        res.response.idpId,
        res.response.id_token
      );
      const userData = await this.loginGoogleService.post(dataToLoginGoogle).toPromise();
      this.stateManagementFuncServices.funcAddDataRegister(userData.data);
      this.verifyStageRegisterDataService.redirectRouteWithDataRegistered();
    });
  }
}
