import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends HttpService<ISignIn>{
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.urls.login,
      new SignInSerializer());
  }
}
export class SignInSerializer {
  fromJson(signInData: any): ISignIn {
    const Signin = new ISignIn();
    return signInData;
  }

  toJson(signInData: ISignIn): any {
    return signInData;
  }
}
