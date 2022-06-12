import { HttpService } from '../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';

@Injectable({
  providedIn: 'root'
})
export class GetChatService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getMatchesOrChat,
      new GetChatServiceSerializer());
  }
}
class GetChatServiceSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelGetMatchesResponse.RootObject): ModelGetMatchesResponse.RootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelGetMatchesResponse.RootObject):  ModelGetMatchesResponse.RootObject {
    return signInData;
  }
}
