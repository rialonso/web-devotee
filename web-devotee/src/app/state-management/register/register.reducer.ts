import { createReducer, on } from '@ngrx/store';
import { INITAL_STATE_REGISTER_USER, IRegisterUser } from 'src/app/shared/model/register/register.model.';
import { addEmail } from './register.action';

export const initialState: IRegisterUser = INITAL_STATE_REGISTER_USER;

export const counterReducer = createReducer(
  initialState,
  on(addEmail, (state,{email}) => state = email )
);
