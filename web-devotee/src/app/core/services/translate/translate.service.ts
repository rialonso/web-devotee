import { Injectable } from '@angular/core';
import * as data from './translate.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  textTranslate: string;
  dataFormatation: string;
constructor() { }
  veriyLanguage(): void {
    let userLang = navigator.language;
    this.selectLanguage(userLang);
  }
  getDataTranslate(): any {
    return Object.entries(data);
  }
  selectLanguage(language): void {
    let data = this.getDataTranslate();


    switch (language) {
      case 'pt-BR':
        this.traductionLanguage(data[0][1]);
        console.log(data[0]);
        this.dataFormatation = 'pt';
        break;
      case 'en-US':
        this.traductionLanguage(data[1][1]);
        console.log(data[0]);
        this.dataFormatation = 'us';
        break;

      default:
        this.traductionLanguage(data[1][1]);
        this.dataFormatation = 'us';
        break;
    }
  }
  traductionLanguage(dataLanguage): void{
    this.textTranslate = dataLanguage;
}
}
