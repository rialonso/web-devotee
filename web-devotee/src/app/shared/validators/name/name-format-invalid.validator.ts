import { AbstractControl } from "@angular/forms";
import { ErrorsEnum } from "../../enum/errors/errors.enum";

export function nameValidatorFormatInvalid(control: AbstractControl): { [key: string]: boolean } | null {
  const nameValue = control.value;
  if (nameValue !== undefined
      && /^\[a-zA-Z]{2,} [a-zA-Z]{2,}$/.test(nameValue)) {
      return { [ErrorsEnum.FORMAT_INVALID]: true };
  }
  return null;
}

