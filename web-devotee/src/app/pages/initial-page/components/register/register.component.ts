import { INIT_DATA_ERRORS } from './../../../../shared/enum/errors/errors.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { VerifyEmailService } from 'src/app/core/services/verify-email/verify-email.service';
import { IHeaderCardsInitialPage } from 'src/app/shared/components/header-cards-initial-page/model/header-cards.data';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { ModelErrors } from 'src/app/shared/model/errors/errors.model';
import { MHeaderCardsInitialPage } from 'src/app/shared/model/header-cards-initial-page/header-cards-initial-page.enum';
import { IAppState } from 'src/app/state-management/app.model';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';
import { AddDataRegister } from 'src/app/state-management/register/register.action';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { AddAllDataUser } from 'src/app/state-management/user-data/user-data.action';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  openMobileSignIn = false;
  hide = true;
  loading = false;

  formGroup: FormGroup;

  dataCardInitialPage: IHeaderCardsInitialPage;

  enumRoute = EnumRoutesApplication;
  dataTexts

  showErrorCredentials: ModelErrors = INIT_DATA_ERRORS;

  destroy$ = new ReplaySubject();
  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private routerService: RouteService,
    private formBuilder: FormBuilder,
    private verifyEmailService: VerifyEmailService,
    private registerService: RegisterService,
    private dialogsService: DialogsService,
  ) {
    this.store.select('controlsApp')
    .pipe(takeUntil(this.destroy$))
    .subscribe((controlsApp: any) => {
      this.changeOpenMenuMobile(controlsApp.openSingIn);
    });
  }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
    this.generateDataHeaderCard();
    if (window.innerWidth < 768)
      this.store.dispatch(new AddControlApp({ openSingIn: true }));

  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }
  generateDataHeaderCard() {
    const dataTextHeaderCard = this.dataTexts.registerPg;
    this.dataCardInitialPage =
      new MHeaderCardsInitialPage(
        {
          id: 'titleHeaderCardRegister',
          label: dataTextHeaderCard.title
        },
      );
  }
  navigateTo(route){
    this.routerService.navigateToURL(route);
  }
  initForm() {
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
          Validators.minLength(8),
        ]
      ]
    });
  }
  async verifyEmail() {
    const email = this.formGroup.get('email');
    if (email.valid) {
      this.verifyEmailService
        .post({email: email.value})
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          responseVerifyEmail => {},
          responseVerifyEmail => {
            // console.log(responseVerifyEmail);
            const responseError = responseVerifyEmail?.error?.errors;
            if (responseError.email
              && responseError.email[0] === "Email já está em uso.") {
              this.showErrorCredentials
              = new ModelErrors(
                true,
                this.dataTexts.errors.existingEmail
              )
            } else {
              this.showErrorCredentials
              = new ModelErrors(
                false,
               ''
              )
            }
        }
      );
    }
  }
  async continueToRegister() {
    if (this.formGroup.valid) {
      this.loading = true;
      const registerData = await this.registerService.post(this.formGroup.value).toPromise();
      this.store.dispatch(new AddAllDataUser(registerData));
      this.loading = false;
      this.navigateTo(EnumRoutesApplication.REGISTER_WHO_ARE_YOU);
    }

  }
  openTerms() {
    this.dialogsService.openTerms();
  }
  openPrivacy() {
    this.dialogsService.openPrivacy();
  }
}
