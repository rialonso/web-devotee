import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.login,
      new SignInSerializer());
  }
}
class SignInSerializer {
  constructor (
    private store?: Store<IAppState>,
    private state?: State<IAppState>
    ) {}
  fromJson(signInData: ISignIn): ISignIn {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: IUserData.RootObject): any {
    localStorage.setItem('access_token', `${signInData.access_token}`);
    localStorage.setItem('userId', `${signInData.data.id}`);
    return signInData;
  }
}
