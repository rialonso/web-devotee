import { IControlsApp } from './controls/controls-app.state';
import { IRegisterData } from './register/register.state';
import { IUserData } from './user-data/user-data.state';

export interface IAppState {
  registerData: IRegisterData,
  controlsApp: IControlsApp,
  userData: IUserData.RootObject
}
