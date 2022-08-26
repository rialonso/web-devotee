import { ActionCreator, createAction, props } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { IControlsApp } from './controls-app.state';
import { ControlsEnum } from './register.enum';


export class AddControlApp implements CustomAction {
  type = ControlsEnum.addControlsApp;
  constructor(public payload?: any){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
export class IncrementCountShowAds implements CustomAction {
  type = ControlsEnum.countShowAds;
  constructor(public payload?: IControlsApp){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
export class ResetCountShowAds implements CustomAction {
  type = ControlsEnum.addControlsApp;
  constructor(public payload?: IControlsApp){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
