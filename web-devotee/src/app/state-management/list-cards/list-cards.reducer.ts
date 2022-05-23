import { createReducer, on } from "@ngrx/store";
import { ListCardsAddData } from "./list-cards.action";
import { IListCards, INITIAL_STATE_LIST_CARDS } from "./list-cards.state";

export const initialState: IListCards.RootObject = INITIAL_STATE_LIST_CARDS;

export const listCardsReducer = createReducer(
  initialState,
  on(new ListCardsAddData().creatAction(), (state,  payload: any ) => ({
    ...state,
    ...payload
  }))
)
