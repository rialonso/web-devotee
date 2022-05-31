import { AbstractControl } from "@angular/forms";
import { ErrorsEnum } from "../../enum/errors/errors.enum";

export function nameValidatorSpecialCharacteres(control: AbstractControl): { [key: string]: boolean } | null {
  const nameValue = control.value;
  if (nameValue !== undefined
      && !/^\[a-zA-Z]$/.test(nameValue)) {
      return { [ErrorsEnum.SPECIAL_CHARACTERES]: true };
  }
  return null;
}
