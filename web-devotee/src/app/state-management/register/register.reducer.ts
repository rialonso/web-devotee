import { createReducer, on } from '@ngrx/store';
import { INITAL_STATE_REGISTER_USER, IRegisterUser } from 'src/app/shared/model/register/register.model.';
import { AddData } from './register.action';

export const initialState: IRegisterUser = INITAL_STATE_REGISTER_USER;

export const registerReducer = createReducer(
  initialState,
  on(new AddData().creatAction(), (state,  payload ) => ({
    ...state,
    ...payload
  }))
);
