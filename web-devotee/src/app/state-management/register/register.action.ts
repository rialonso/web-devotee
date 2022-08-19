import { ActionCreator, createAction, props } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { RegisterEnum } from './register.enum';

// export const addEmail = createAction(
//     '[Register Component] addEmail',
//     props<{ email: IRegisterUser }>()
//   );

export class AddDataRegister implements CustomAction {
  type = RegisterEnum.addData;
  constructor(public payload?: any){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
