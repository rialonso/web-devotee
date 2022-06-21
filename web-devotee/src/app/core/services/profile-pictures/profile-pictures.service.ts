import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicturesService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.profilePictures,
      new ProfilePicturesSerializer());
    this.options = {
      responseType: 'json',
      headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage?.getItem('access_token') || ''}`,
      })
    }
  }
}
class ProfilePicturesSerializer {
  constructor (
    ) {}
  fromJson(profileData: any): any {
    if(profileData != undefined ) {
      console.log(profileData);

      return profileData;
    }

  }

  toJson(profileData: any): any {
    return profileData;
  }
}
