import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModelGetMedicines } from 'src/app/shared/model/response/get-medicines/get-medicines.model';
import { ModelLikeDislikeReponse } from 'src/app/shared/model/response/like-dislike-response/like-dislike.model';
import { ModelLikeDislikeRequest } from 'src/app/shared/model/request/like-dislike-request/like-dislike.model';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.likes,
      new LikeDislikeSerializer());
  }
}
class LikeDislikeSerializer {
  constructor (
    ) {}
  fromJson(signInData: ModelLikeDislikeRequest.IRootObject): ModelLikeDislikeRequest.IRootObject {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: ModelLikeDislikeReponse.IRootObject): ModelLikeDislikeReponse.IRootObject {
    return signInData;
  }
}
