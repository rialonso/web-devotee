import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  openMobileSignIn = false;

  destroy$ = new ReplaySubject();
  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
  ) {
    this.store.select('controlsApp')
    .pipe(takeUntil(this.destroy$))
    .subscribe((controlsApp: any) => {
      this.changeOpenMenuMobile(controlsApp.openSingIn);
    });
  }

  ngOnInit() {
  }
  changeOpenMenuMobile(actionClicked: boolean): void {
    this.openMobileSignIn = actionClicked;
  }
}
