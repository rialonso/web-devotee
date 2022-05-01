import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { takeUntil } from 'rxjs/operators';
import { AddControlApp } from 'src/app/state-management/controls/copntrols-app.action';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { HttpService } from 'src/app/core/services/generics-http/httpService.service';
import { SignInService } from 'src/app/core/services/sign-in/sign-in.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = false;
  dataTexts;
  formGroup: FormGroup;
  destroy$ = new ReplaySubject();
  constructor(
    public routeService: RouteService,
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private translateService: TranslateService,
    private router: Router,
    private signInService: SignInService,
    private formBuilder: FormBuilder,

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
  navigateTo(): void {
    this.routeService.navigateToURL('/recuperar');
  }
  async signIn() {
    if (this.formGroup.valid) {
      const signInData = await this.signInService.post(this.formGroup.value).toPromise();
      console.log(this.state.getValue());

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
