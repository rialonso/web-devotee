export class ISignInGoogle  {
  email: string;
  type: string;
  token: string;
  constructor(
    email: string,
    type: string,
    token: string,
  ) {
    this.email = email;
    this.type = type;
    this.token = token;

  }
}
