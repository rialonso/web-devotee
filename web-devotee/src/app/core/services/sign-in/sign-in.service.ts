import { HttpService } from './../generics-http/httpService.service';
import { Injectable } from '@angular/core';
import { ISignIn } from 'src/app/shared/model/sign-in/sign-in.state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService extends HttpService<ISignIn>{
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://54.207.143.191/api/login',
      new PizzaSerializer());
  }
}
export class PizzaSerializer {
  fromJson(json: any): ISignIn {
    const Signin = new ISignIn();
    return json;
  }

  toJson(pizza: ISignIn): any {
    return {
      id: pizza.email,
      name: pizza.password
    };
  }
}
