import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.scss']
})
export class RememberPasswordComponent implements OnInit {
  openMobileSignIn = false;

  dataTexts;
  dataCardInitialPage: IHeaderCardsInitialPage;
  destroy$ = new ReplaySubject();

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    public routeService: RouteService,

  ) {
    this.store.select('controlsApp')
    .pipe(takeUntil(this.destroy$))
    .subscribe((controlsApp: any) => {
      this.changeOpenMenuMobile(controlsApp.openSingIn);
    });
  }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    if (!this.routeService.verifyOpenSingIn() && window.innerWidth < 768)
      this.store.dispatch(new AddControlApp({ openSingIn: true }));
    this.generateDataHeaderCard();
  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }
  navigateTo() {
    this.routeService.navigateToURL(EnumRoutesApplication.LOGIN);
  }
  generateDataHeaderCard() {
    const dataTextHeaderCard = this.dataTexts.rememberPasswordPg;
    this.dataCardInitialPage =
      new MHeaderCardsInitialPage(
        {
          id: 'titleHeaderCardRememberPassword',
          label: dataTextHeaderCard.title
        },
        {
          id: 'textHeaderCardRememberPassword',
          label: dataTextHeaderCard.text
        }
      );

  }
}
