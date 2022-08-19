import { INITIAL_STATE_USER_DATA } from './user-data/user-data.state';
import { IAppState } from './app.model';
import { INITIAL_STATE_CONTROLS_APP } from './controls/controls-app.state';
import { INITIAL_STATE_LIST_CARDS } from './list-cards/list-cards.state';
import { INITIAL_STATE_REGISTER_USER } from './register/register.state';

export const INITIAL_STATE: IAppState = {
  registerData: INITIAL_STATE_REGISTER_USER,
  controlsApp: INITIAL_STATE_CONTROLS_APP,
  userData: INITIAL_STATE_USER_DATA,
  listCards: INITIAL_STATE_LIST_CARDS,
}
