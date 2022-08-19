export declare module ModelLikeDislikeReponse {

  export interface IData {
    user_id: number;
    target_user: number;
    type: string;
    updated_at: string;
    created_at: string;
    id: number;
    is_match: boolean;
  }

  export interface IRootObject {
      status: boolean;
      data: IData;
  }

}

