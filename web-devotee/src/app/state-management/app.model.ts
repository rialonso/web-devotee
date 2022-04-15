import { IControlsApp } from './controls/controls.state';
import { IRegisterData } from './register/register.state';

export interface IAppState {
  registerData: IRegisterData,
  controlsApp: IControlsApp
}
