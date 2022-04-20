import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  dataTexts;
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    ) {}
  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }
  clickopenMobileSignIn(): void {
    this.store.dispatch(new AddControlApp({ openSingIn: true }));
    console.log(this.state.getValue());
  }
}
