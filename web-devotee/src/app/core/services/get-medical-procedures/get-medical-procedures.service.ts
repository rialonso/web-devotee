import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetMedicalProceduresService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getMedicalProcedure,
      new GetMedicalProceduresSerializer());
  }
}
class GetMedicalProceduresSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelGetMedicalProceduresReponse.IRootObject): ModelGetMedicalProceduresReponse.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelGetMedicalProceduresReponse.IRootObject): ModelGetMedicalProceduresReponse.IRootObject {
    return signInData;
  }
}
