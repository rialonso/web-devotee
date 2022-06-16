import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { TranslateService } from './../../../core/services/translate/translate.service';
import { Injectable } from '@angular/core';
import { EnumFormatsInputs } from '../../enum/formats-inputs/formats-inputs.enum';

@Injectable({
  providedIn: 'root'
})
export class ChangeMaskService {

  constructor(
    private translateService: TranslateService,
  ) { }

  changeMaskBirthDate() {
    if (EnumLanguages.PT === this.translateService.dataFormatation) {
      return EnumFormatsInputs.datePt;
    }
    return EnumFormatsInputs.dateUs
  }
}
