import { ModelErrors } from "../../model/errors/errors.model";

export const INIT_DATA_ERRORS: ModelErrors = {
  showError: false,
  menssage: ''
}

export enum ErrorsEnum {
  REQUIRED = 'required',
  EMAIL = 'email',
  INVALID_EMAIL = 'invalidEmail',
  SPECIAL_CHARACTERES = 'containSpecialCharacters',
  FORMAT_INVALID = 'formatInvalid'
}
