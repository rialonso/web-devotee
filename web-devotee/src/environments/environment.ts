// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:'http://54.207.143.191/',
  urls: {
    login: 'api/login',
    registerUser: 'api/users',
    updateUser: 'api/users/update',
    listCards: 'api/cards'
  }
};

