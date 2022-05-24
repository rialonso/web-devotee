import { IRegisterUser, INITIAL_STATE_REGISTER_USER } from './register.state';
import { createReducer, on } from '@ngrx/store';
import { AddData } from './register.action';

export const initialState: IRegisterUser = INITIAL_STATE_REGISTER_USER;

export const registerReducer = createReducer(
  initialState,
  on(new AddData().creatAction(), (state,  payload ) => ({
    ...state,
    ...payload
  }))
);
