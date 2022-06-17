import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetAddressLatLong } from 'src/app/shared/model/response/google/get-address-lat-long/getAddressLatLong.model';

@Injectable({
  providedIn: 'root'
})
export class GetAddressLatLongService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.googleApis.api,
      environment.googleApis.getAddrress,
      new GetAddressLatLongSerializer());
  }
}
class GetAddressLatLongSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelGetAddressLatLong.IRootObjetct): ModelGetAddressLatLong.IRootObjetct {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelGetAddressLatLong.IRootObjetct): ModelGetAddressLatLong.IRootObjetct {
    return signInData;
  }
}
