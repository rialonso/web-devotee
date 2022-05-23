import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State, Store } from '@ngrx/store';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { IRegisterUser } from 'src/app/state-management/register/register.state';
import { IListCards } from 'src/app/state-management/list-cards/list-cards.state';

@Injectable({
  providedIn: 'root'
})
export class ListCardsService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.listCards,
      new ListCardsSerializer());
  }
}
class ListCardsSerializer {
  constructor () {}
  fromJson(registerRequest: IListCards.RootObject): IListCards.RootObject {
    if(registerRequest != undefined ) {
      return registerRequest;
    }

  }

  toJson(registerResponse: IListCards.RootObject): IListCards.RootObject {
    return registerResponse;
  }
}
