import { createReducer, on } from '@ngrx/store';
import { IControlsApp, INITIAL_STATE_CONTROLS_APP } from './controls-app.state';
import { AddControlApp, ResetCountShowAds, IncrementCountShowAds } from './copntrols-app.action';

export const initialState: IControlsApp = INITIAL_STATE_CONTROLS_APP;

export const controlsAppReducer = createReducer(
  initialState,
  on(new AddControlApp().creatAction(), (state,  action: any) => ({
    ...state,
    ...action.payload
  })),
  on(new IncrementCountShowAds().creatAction(), (state, action: any ) => ({
    ...state,
    countShowAds: state.countShowAds + 1
  })),
  on(new ResetCountShowAds().creatAction(), (state, action: any ) => ({
    ...state,
    countShowAds: 0
  }))
);
