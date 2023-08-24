export class ISignInGoogle  {
  email: string;
  login_type: string;
  token: string;
  constructor(
    email: string,
    login_type: string,
    token: string,
  ) {
    this.email = email;
    this.login_type = login_type;
    this.token = token;

  }
}
