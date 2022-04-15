import { Action, createAction } from '@ngrx/store';

export class CustomAction implements Action{
  readonly type: string;
  constructor(public payload?: any) {}
  creatAction(): any {
    return createAction(this.type);
  }
}
