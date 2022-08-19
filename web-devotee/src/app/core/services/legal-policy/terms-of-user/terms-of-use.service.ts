import { HttpService } from '../../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMedicines } from 'src/app/shared/model/response/get-medicines/get-medicines.model';
import { TranslateService } from '../../translate/translate.service';

@Injectable({
  providedIn: 'root'
})
export class TermsOfUseServicePt extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.termsOfUsePt,
      new TermsOfUseSerializer());
  }
}

class TermsOfUseSerializer {
  constructor (
    ) {}
  fromJson(signInData: any): any {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: any): any {
    return signInData;
  }
}
@Injectable({
  providedIn: 'root'
})
export class TermsOfUseServiceEn extends HttpService<any>{
  constructor(
    httpClient: HttpClient,
    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.termsOfUseEn,
      new TermsOfUseSerializer());
  }
}
