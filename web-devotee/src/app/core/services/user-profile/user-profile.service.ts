import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,
    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.userProfile,
      new UserProfileSerializer());
  }
}
class UserProfileSerializer {
  constructor () {}
  fromJson(registerRequest: IUserData.RootObject): IUserData.RootObject {
    if(registerRequest != undefined ) {
      return registerRequest;
    }

  }

  toJson(registerResponse: IUserData.RootObject): IUserData.RootObject {
    return registerResponse;
  }
}
