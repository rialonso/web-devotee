import { ActionCreator, createAction, props } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { IControlsApp } from './controls-app.state';
import { ControlsEnum } from './register.enum';


export class AddControlApp implements CustomAction {
  type = ControlsEnum.addControlsApp;
  constructor(public payload?: IControlsApp){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
