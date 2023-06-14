import { createReducer, on } from '@ngrx/store';
import { AddAllDataUser } from './user-data.action';
import { IUserData, INITIAL_STATE_USER_DATA } from './user-data.state';

export const initialState: IUserData.RootObject = INITIAL_STATE_USER_DATA;

export const userDataReducer = createReducer(
  initialState,
  on(new AddAllDataUser().creatAction(), (state,  action: any) => (
    {
      ...state,
      ...action.payload,
      data: {
        ...state.data,
        ...action.payload.data,
      }
    }
  )),

);
