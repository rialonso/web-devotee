import { HttpService } from '../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getChat,
      new SendMessageSerializer());
  }
}
class SendMessageSerializer {
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
