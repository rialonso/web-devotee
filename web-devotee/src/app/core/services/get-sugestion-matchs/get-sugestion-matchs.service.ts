import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';
import { ModelSugestionMatchsResponse } from 'src/app/shared/model/response/get-sugestion-matchs/get-sugestion-matchs.model';

@Injectable({
  providedIn: 'root'
})
export class GetSugestionMatchsService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getSugestionMatchs,
      new GetSugestionSerializer());
  }
}
class GetSugestionSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelSugestionMatchsResponse.IRootObject): ModelSugestionMatchsResponse.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelSugestionMatchsResponse.IRootObject):  ModelSugestionMatchsResponse.IRootObject {
    return signInData;
  }
}
