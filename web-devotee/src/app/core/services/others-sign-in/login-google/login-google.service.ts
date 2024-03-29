import { HttpService } from './../../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { ISignInGoogle } from 'src/app/shared/model/others-sign-in/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService extends HttpService<any>{
  constructor(
    httpClient: HttpClient,
    ) {
    super(
      httpClient,
      environment.api,
      environment.urls.registerUser,
      new LoginGoogleSerializer());
  }
}
class LoginGoogleSerializer {
  constructor (
    private store?: Store<IAppState>,
    private state?: State<IAppState>
    ) {}
  fromJson(signInData: ISignInGoogle): ISignInGoogle {
    if(signInData != undefined ) {
      return signInData;
    }

  }

  toJson(signInData: IUserData.RootObject): any {
    if (signInData.status) {
      localStorage.setItem('access_token', `${signInData?.access_token}`);
      localStorage.setItem('userId', `${signInData?.data.id}`);
    }
    return signInData;
  }
}
