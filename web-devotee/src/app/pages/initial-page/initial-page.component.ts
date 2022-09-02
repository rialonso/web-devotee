import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  dataTexts;
  routeApp = EnumRoutesApplication;
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private routeService: RouteService,
    ) {}
  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }
  clickopenMobileSignIn(): void {
    this.store.dispatch(new AddControlApp({ openSingIn: true }));
  }
  navigateTo(route: EnumRoutesApplication) {
    this.routeService.navigateToURL(route);
  }
}
