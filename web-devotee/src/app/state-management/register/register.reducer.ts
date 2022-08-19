import { IRegisterUser, INITIAL_STATE_REGISTER_USER } from './register.state';
import { createReducer, on } from '@ngrx/store';
import { AddDataRegister } from './register.action';

export const initialState: IRegisterUser = INITIAL_STATE_REGISTER_USER;

export const registerReducer = createReducer(
  initialState,
  on(new AddDataRegister().creatAction(), (state,  data: any ) => ({
    ...state,
    ...data.payload
  }))
);
