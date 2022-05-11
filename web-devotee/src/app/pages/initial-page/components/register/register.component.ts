import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IHeaderCardsInitialPage } from 'src/app/shared/components/header-cards-initial-page/model/header-cards.data';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { MHeaderCardsInitialPage } from 'src/app/shared/model/header-cards-initial-page/header-cards-initial-page.enum';
import { IAppState } from 'src/app/state-management/app.model';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  openMobileSignIn = false;
  hide = true;

  formGroup: FormGroup;

  dataCardInitialPage: IHeaderCardsInitialPage;

  enumRoute = EnumRoutesApplication;
  dataTexts


  destroy$ = new ReplaySubject();
  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private routerService: RouteService,
    private formBuilder: FormBuilder,
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
}
