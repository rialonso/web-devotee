import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';

@Injectable({
  providedIn: 'root'
})
export class VerifyStageRegisterDataService {

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
  ) { }
  verifyDataRegistered() {

  }
  redirectRouteWithDataRegistered() {

  }
}
