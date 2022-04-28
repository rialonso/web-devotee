import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { routesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/route.service';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.scss']
})
export class RememberPasswordComponent implements OnInit {
  openMobileSignIn = false;

  dataTexts;
  destroy$ = new ReplaySubject();

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,

    private translateService: TranslateService,
    private router: Router,

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
    if (!this.routeService.verifyOpenSingIn())
      this.navigateTo();

  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }

  navigateTo() {
    this.routeService.navigateToURL(routesApplication.LOGIN);
  }
}
