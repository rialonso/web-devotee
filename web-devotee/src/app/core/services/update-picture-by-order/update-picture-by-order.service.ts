import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdatePictureByOrderService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.updateProfilePictureByOrder,
      new UpdatePictureByOrderSerializer());
      this.options = {
        headers: new HttpHeaders({
            'Authorization': `Bearer ${localStorage?.getItem('access_token') || ''}`,
        })
      }
  }
}
class UpdatePictureByOrderSerializer {
  constructor (
    ) {}
  fromJson(profileData: any): any {
    if(profileData != undefined ) {
      return profileData;
    }

  }

  toJson(profileData: any): any {
    return profileData;
  }
}
