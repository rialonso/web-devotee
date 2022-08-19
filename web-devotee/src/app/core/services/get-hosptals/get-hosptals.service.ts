import { HttpService } from '../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelHosptals } from 'src/app/shared/model/response/get-hosptals/get-hosptals.model';

@Injectable({
  providedIn: 'root'
})
export class GetHosptalsService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getHosptals,
      new GetHosptalsSerializer());
  }
}
class GetHosptalsSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelHosptals.IRootObject): ModelHosptals.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelHosptals.IRootObject):  ModelHosptals.IRootObject {
    return signInData;
  }
}
