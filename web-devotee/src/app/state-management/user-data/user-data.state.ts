export declare module IUserData {

  export interface ProfilePicture {
      id: number;
      user_id: number;
      path: string;
      main: number;
      created_at: Date;
      updated_at: Date;
      order: number;
  }

  export interface Data {
      id: number;
      stripe_id: string;
      subscriptions_id: string;
      plan_type: string;
      name: string;
      active: number;
      email: string;
      birthdate?: any;
      account_type: string;
      gender: string;
      show_as_gender?: any;
      sexual_orientation?: any;
      target_gender: string;
      type: string;
      email_verified_at?: any;
      old_id: number;
      notification_token: string;
      lat: number;
      lng: number;
      age_min: number;
      age_max: number;
      max_distance: number;
      created_at: string;
      updated_at: string;
      automatic_location: boolean;
      disability_description?: any;
      occupation: string;
      about: string;
      address_description: string;
      tiic: boolean;
      show_me: boolean;
      prejudice: boolean;
      show_age: boolean;
      show_distance: boolean;
      things_i_use?: any;
      illicit_drugs?: any;
      relationship_type: string;
      target_account_type: string;
      notification_message: boolean;
      notification_match: boolean;
      notification_like: boolean;
      os: string;
      model: string;
      osVersion: string;
      reason_cancel_plan?: any;
      reason_cancel_account?: any;
      legacy_user: number;
      profile_picture: ProfilePicture[];
  }

  export interface RootObject {
      status: boolean;
      data: Data;
      access_token: string;
  }


}
export const INITIAL_STATE_USER_DATA: IUserData.RootObject = {
  status: null,
  data: null,
  access_token: null,
}
