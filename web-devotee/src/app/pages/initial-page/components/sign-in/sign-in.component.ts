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
import { MErrors } from 'src/app/shared/model/errors/errors.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = false;

  dataTexts;
  routesEnum = EnumRoutesApplication;
  formGroup: FormGroup;
  showErrorCredentials: MErrors = INIT_DATA_ERRORS;
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
  async signIn() {
    if (this.formGroup.valid) {
      const signInData: any = await this.signInService.post(this.formGroup.value).toPromise();
      signInData?.status
        ? this.stateManagementFuncServices.funcAddAllDataUser(signInData)
        : this.showErrorCredentials
        = new MErrors(
          !signInData.status,
           this.dataTexts.errors.credentials
        )
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
}
