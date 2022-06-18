import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMedicines } from 'src/app/shared/model/response/get-medicines/get-medicines.model';

@Injectable({
  providedIn: 'root'
})
export class GetMedicinesService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.getMedicines,
      new GetMedicinesSerializer());
  }
}
class GetMedicinesSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelGetMedicines.IRootObject): ModelGetMedicines.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelGetMedicines.IRootObject): ModelGetMedicines.IRootObject {
    return signInData;
  }
}
