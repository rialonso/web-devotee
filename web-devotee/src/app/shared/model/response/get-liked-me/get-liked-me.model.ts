export declare module ILikedMe {

  export interface User {
      id: number;
      stripe_id?: any;
      subscriptions_id?: any;
      plan_type: string;
      name?: any;
      active: number;
      email: string;
      birthdate?: any;
      account_type?: any;
      gender?: any;
      show_as_gender?: any;
      sexual_orientation?: any;
      target_gender?: any;
      type: string;
      email_verified_at?: any;
      old_id?: any;
      notification_token?: any;
      lat?: any;
      lng?: any;
      age_min: number;
      age_max: number;
      max_distance: number;
      created_at: string;
      updated_at: string;
      automatic_location: boolean;
      disability_description?: any;
      occupation?: any;
      about?: any;
      address_description?: any;
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
      os?: any;
      model?: any;
      osVersion?: any;
      reason_cancel_plan?: any;
      reason_cancel_account?: any;
      legacy_user: number;
      subscription_order_id?: any;
      profile_picture: any[];
  }

  export interface ProfilePicture {
      id: number;
      user_id: number;
      path: string;
      main: number;
      created_at: Date;
      updated_at: Date;
      order: number;
  }

  export interface Target {
      id: number;
      stripe_id?: any;
      subscriptions_id?: any;
      plan_type: string;
      name: string;
      active: number;
      email: string;
      birthdate: string;
      account_type: string;
      gender: string;
      show_as_gender: string;
      sexual_orientation: string;
      target_gender: string;
      type: string;
      email_verified_at?: any;
      old_id?: any;
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
      subscription_order_id?: any;
      profile_picture: ProfilePicture[];
  }

  export interface RootObject {
      id: number;
      user_id: number;
      target_user: number;
      active: number;
      type: string;
      created_at: string;
      updated_at: string;
      user: User;
      target: Target;
  }

}

