import { ActionCreator, createAction } from '@ngrx/store';
import { CustomAction } from '../custom.action';
import { ListCardsEnum } from './list-cards.enum';

export class ListCardsAddData implements CustomAction {
  type = ListCardsEnum.addData;
  constructor(public payload?: any){}
  creatAction(): ActionCreator {
    return createAction(this.type);
  }
}
