import { createAction, props } from '@ngrx/store';
import { IRegisterUser } from 'src/app/shared/model/register/register.model.';

export const addEmail = createAction(
    '[Register Component] addEmail',
    props<{ email: IRegisterUser }>()
  );
