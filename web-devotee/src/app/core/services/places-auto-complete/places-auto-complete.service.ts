import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelPlacesAutocomplete } from 'src/app/shared/model/response/google/get-places-autocomplete/getPlacesAutocomplete.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesAutoCompleteService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      '/googleURL',
      environment.googleApis.getPlacesAutocomplete,
      new PlacesAutoCompleteSerializer());
  }
}
class PlacesAutoCompleteSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelPlacesAutocomplete.IRootObject): ModelPlacesAutocomplete.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelPlacesAutocomplete.IRootObject): ModelPlacesAutocomplete.IRootObject {
    return signInData;
  }
}
