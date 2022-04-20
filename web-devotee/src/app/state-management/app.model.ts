import { IControlsApp } from './controls/controls-app.state';
import { IRegisterData } from './register/register.state';

export interface IAppState {
  registerData: IRegisterData,
  controlsApp: IControlsApp
}
