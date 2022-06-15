import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';
import { ModelGenerateHashQrcodeResponse } from 'src/app/shared/model/qrcode/qrcode.model';

@Injectable({
  providedIn: 'root'
})
export class ReadHashQrcodeService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.readHash,
      new ReadHashQrcodeSerializer());
  }
}
class ReadHashQrcodeSerializer {
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
