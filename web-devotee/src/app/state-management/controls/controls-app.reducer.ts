import { createReducer, on } from '@ngrx/store';
import { IControlsApp, INITIAL_STATE_CONTROLS_APP } from './controls-app.state';
import { AddControlApp } from './copntrols-app.action';

export const initialState: IControlsApp = INITIAL_STATE_CONTROLS_APP;

export const controlsAppReducer = createReducer(
  initialState,
  on(new AddControlApp().creatAction(), (state,  payload) => ({
    ...state,
    ...payload
  }))
);
