import { ActionCreator, createAction, props } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { RegisterEnum } from './user-data.enum';
import { IRegisterData } from './user-data.state';

// export const addEmail = createAction(
//     '[Register Component] addEmail',
//     props<{ email: IRegisterUser }>()
//   );

export class AddData implements CustomAction {
  type = RegisterEnum.addData;
  constructor(public payload?: any){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
