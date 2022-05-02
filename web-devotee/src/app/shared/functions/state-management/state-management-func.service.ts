import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { AddAllDataUser } from 'src/app/state-management/user-data/user-data.action';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Injectable({
  providedIn: 'root'
})
export class StateManagementFuncService {

constructor(
  protected store: Store<IAppState>,
  protected state: State<IAppState>,
) { }
  funcAddAllDataUser(dataUser: any): boolean {
    this.store.dispatch(new AddAllDataUser(dataUser));
    return true;
  }
}
