import { ActionCreator, createAction, props } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { UserDataEnum } from './user-data.enum';

// export const addEmail = createAction(
//     '[Register Component] addEmail',
//     props<{ email: IRegisterUser }>()
//   );

export class AddUserDataAll implements CustomAction {
  type = UserDataEnum.addDataAll;
  constructor(public payload?: any){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
