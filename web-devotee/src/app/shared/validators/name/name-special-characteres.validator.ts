import { AbstractControl } from "@angular/forms";
import { ErrorsEnum } from "../../enum/errors/errors.enum";

export function nameValidatorSpecialCharacteres(control: AbstractControl): { [key: string]: boolean } | null {
  const nameValue = control.value;
  console.log();

  if (nameValue !== undefined
      && !/^[a-zA-Z\s]+$/.test(nameValue)) {
      return { [ErrorsEnum.SPECIAL_CHARACTERES]: true };
  }
  return null;
}
