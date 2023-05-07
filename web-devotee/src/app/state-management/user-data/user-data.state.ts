export module IUserData {

  export class ProfilePicture {
      id: number;
      user_id: number;
      path: string;
      main: number;
      created_at: Date;
      updated_at: Date;
      order: number;
  }
  export class ICid {
    id: number;
    code: string;
    description: string;
    description_en: string;
  }

  export class IMyICDs {
    id: number;
    user_id: number;
    cid_id: number;
    created_at: string;
    updated_at: string;
    cid: ICid;
  }
  export class IHosptal {
    id: number;
    name: string;
    lat: number;
    lng: number;
    country: string;
    codeiso2: string;
    codeiso3: string;
  }
  export class IMyHosptals {
    id: number;
    user_id: number;
    hospital_id: number;
    created_at: string;
    updated_at: string;
    hospital: IHosptal;
  }
  export class IDrug {
    id: number;
    name: string;
    name_en: string;
    country: string;
    codeiso2: string;
    codeiso3: string;
  }
  export class IMyDrugs {
    id: number;
    user_id: number;
    drug_id: number;
    created_at: string;
    updated_at: string;
    drug: IDrug;
  }
  export class IMedicaPocedureData {
    id: number;
    name: string;
    name_en: string;
  }
  export class IMedicalProcedures {
    id: number;
    user_id: number;
    medical_procedures_id: number;
    created_at: string;
    updated_at: string;
    medical_procedures: IMedicaPocedureData;
  }
  export class IData {
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
      my_cids: IMyICDs[];
      my_hospitals: IMyHosptals[];
      my_drugs: IMyDrugs[]
      medical_procedures: IMedicalProcedures[]
  }

  export class RootObject {
      status: boolean;
      data: IData;
      access_token?: string;
  }


}
export const INITIAL_STATE_USER_DATA: IUserData.RootObject = {
  status: null,
  data: null,
  access_token: null,
}
