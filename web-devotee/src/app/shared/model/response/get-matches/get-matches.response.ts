import { IUserData } from "src/app/state-management/user-data/user-data.state";

export declare module ModelGetMatchesResponse {
  export class RootObject {
    status: boolean;
    data: IData[];
  }
  export class IData {
    match_id: number;
    target_user: ITargetUser;
    latest_message: any;
  }
  export class ITargetUser extends IUserData.IData {

  }
  export class ILastedMessage {
    id: number;
    match_id: number;
    user_id: number;
    recipient_id: number;
    content: string;
    type: string;
    path: any;
    read: boolean;
    created_at: string;
    updated_at: string;
    user: IUserDataMatches;
  }
  export class IUserDataMatches extends IUserData.IData {

  }
}
