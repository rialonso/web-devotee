import { Resource } from './../serializer/resource.model';
export class ISignIn extends Resource {
  email: string;
  password: string;
  associateSignInData(data) {

  }
}
