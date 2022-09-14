import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMedicines } from 'src/app/shared/model/response/get-medicines/get-medicines.model';
import { ModelLikeDislikeReponse } from 'src/app/shared/model/response/like-dislike-response/like-dislike.model';
import { ModelLikeDislikeRequest } from 'src/app/shared/model/request/like-dislike-request/like-dislike.model';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Injectable({
  providedIn: 'root'
})
export class LikedMeService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.likedMe,
      new LikedMeSerializer());
  }
}
class LikedMeSerializer {
  constructor (
    ) {}
  fromJson(signInData: IUserData.RootObject): IUserData.RootObject{
    if(signInData != undefined ) {
      return signInData;
    }
  }

  toJson(signInData:IUserData.RootObject): IUserData.RootObject {
    return signInData;
  }
}
