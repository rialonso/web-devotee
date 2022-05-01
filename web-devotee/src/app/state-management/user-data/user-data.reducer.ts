import { createReducer, on } from '@ngrx/store';
import { AddUserDataAll } from './user-data.action';
import { IUserData, INITIAL_STATE_USER_DATA } from './user-data.state';

export const initialState: IUserData.RootObject = INITIAL_STATE_USER_DATA;

export const userDataReducer = createReducer(
  initialState,
  on(new AddUserDataAll().creatAction(), (state,  payload) => ({

    ...state,
    ...payload
  }))
);
