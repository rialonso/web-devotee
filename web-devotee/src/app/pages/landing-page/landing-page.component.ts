import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { IAppState } from 'src/app/state-management/app.model';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  dataTexts;
  routesApp = EnumRoutesApplication;
  constructor(
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private routeService: RouteService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;
  }

  ngOnInit(): void {
  }
  navigateTo(route: EnumRoutesApplication) {
    this.routeService.navigateToURL(route);
    // this.store.dispatch(new AddControlApp({ openSingIn: true }));

  }
}
