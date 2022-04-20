import { INITAL_STATE_REGISTER_USER } from '../shared/model/register/register.model.';
import { IAppState } from './app.model';
import { INITIAL_STATE_CONTROLS_APP } from './controls/controls-app.state';

export const INITIAL_STATE: IAppState = {
  registerData: INITAL_STATE_REGISTER_USER,
  controlsApp: INITIAL_STATE_CONTROLS_APP,
}
