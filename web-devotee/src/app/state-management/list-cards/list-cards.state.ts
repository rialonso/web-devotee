import { IUserData } from "../user-data/user-data.state";

export declare module IListCards {

  class RootObject {
    status: boolean;
    data: Array<IUserData.IData>;
  }
}

export const INITIAL_STATE_LIST_CARDS: IListCards.RootObject = {
  status: null,
  data: null,
}
