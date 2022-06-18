
import { HttpService } from '../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelHosptals } from 'src/app/shared/model/response/get-hosptals/get-hosptals.model';
import { ModelCidsResponse } from 'src/app/shared/model/response/get-cids/get-cids.model';

@Injectable({
  providedIn: 'root'
})
export class GetCidsService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getCids,
      new GetCidsSerializer());
  }
}
class GetCidsSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelCidsResponse.IRootObject): ModelCidsResponse.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelCidsResponse.IRootObject):  ModelCidsResponse.IRootObject {
    return signInData;
  }
}
