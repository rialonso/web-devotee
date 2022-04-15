import { ActionCreator, createAction, props } from '@ngrx/store';
import { IRegisterUser } from 'src/app/shared/model/register/register.model.';
import { CustomAction } from '../custom.action';
import { RegisterEnum } from './register.enum';
import { IRegisterData } from './register.state';

// export const addEmail = createAction(
//     '[Register Component] addEmail',
//     props<{ email: IRegisterUser }>()
//   );

export class AddData implements CustomAction {
  type = RegisterEnum.addData;
  constructor(public payload?: IRegisterData){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
