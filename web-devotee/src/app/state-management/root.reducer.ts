import { userDataReducer } from './user-data/user-data.reducer';
import { registerReducer } from './register/register.reducer';
import {ActionReducerMap} from '@ngrx/store';
import { IAppState } from './app.model';
import { controlsAppReducer } from './controls/controls-app.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  registerData: registerReducer,
  controlsApp: controlsAppReducer,
  userData: userDataReducer,
}
