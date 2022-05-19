export declare module VerifyEmail {
  export interface Response {
    message: string,
    errors: ResponseErrors
  }
  interface ResponseErrors {
    password: Array<string>,
    email: Array<string>
  }
}
