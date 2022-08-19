export class ModelChangePassword {
  old_password: string;
  password: string;
  constructor(
    old_password: string,
    password: string,
  ){
    this.old_password = old_password;
    this.password = password;
  }
}
