import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { takeUntil } from 'rxjs/operators';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = false;
  dataTexts;

  destroy$ = new ReplaySubject();
  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private router: Router,
  ) {
    this.store.select('controlsApp')
      .pipe(takeUntil(this.destroy$))
      .subscribe((controlsApp: any) => {
        this.changeOpenMenuMobile(controlsApp.openSingIn);
      });
  }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }
  clickopenMobileSignIn(openSignIn: boolean): void {
    this.store.dispatch(new AddControlApp({ openSingIn: openSignIn }));
    console.log(this.state.getValue());
  }
  navigateTo(): void {
    this.router.navigate(['/recuperar']);
  }
}
