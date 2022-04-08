import { Injectable } from '@angular/core';
import * as data from './translate.json';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  textTranslate: string;
  dataFormatation: string;
constructor() { }
  veriyLanguage(){
    let userLang = navigator.language;
    this.selectLanguage(userLang);
  }
  getDataTranslate(){
    return Object.entries(data);
  }
  selectLanguage(language){
    let data = this.getDataTranslate();
    switch (language) {
      case 'pt-BR':
        this.traductionLanguage(data[0][1]['pt']);
        this.dataFormatation = 'pt';
        break;
      case 'en-US':
        this.traductionLanguage(data[0][1]['us']);
        this.dataFormatation = 'us';
        break;

      default:
        this.traductionLanguage(data[0][1]['us']);
        this.dataFormatation = 'us';
        break;
    }
  }
  traductionLanguage(dataLanguage){
    this.textTranslate = dataLanguage
}
}
