import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { AddUserDataAll } from 'src/app/state-management/user-data/user-data.action';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends HttpService<ISignIn>{
  constructor(
    httpClient: HttpClient,

    ) {
    super(
      httpClient,
      environment.urls.login,
      new SignInSerializer());
  }
}
class SignInSerializer {
  constructor (
    private store?: Store<IAppState>,
    private state?: State<IAppState>
    ) {}
  fromJson(signInData: IUserData.RootObject | any): ISignIn {
    const Signin = new ISignIn();
    if(signInData) {
      this.store?.dispatch(new AddUserDataAll(signInData));
      return signInData;
    }

  }

  toJson(signInData: ISignIn): any {
    return signInData;
  }
}
