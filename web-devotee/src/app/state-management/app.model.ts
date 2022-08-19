import { IControlsApp } from './controls/controls-app.state';
import { IListCards } from './list-cards/list-cards.state';
import { IRegisterUser } from './register/register.state';
import { IUserData } from './user-data/user-data.state';

export interface IAppState {
  registerData: IRegisterUser,
  controlsApp: IControlsApp,
  userData: IUserData.RootObject,
  listCards: IListCards.RootObject
}
