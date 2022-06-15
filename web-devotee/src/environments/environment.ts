// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:'https://apiv2.devotee.com.br/',
  urlImages: 'https://devote-v2.s3.sa-east-1.amazonaws.com/',
  urls: {
    login: 'api/login',
    registerUser: 'api/users',
    updateUser: 'api/users/update',
    listCards: 'api/cards',
    userProfile: 'api/users',
    getMatches: 'api/matches',
    getChat: 'api/match/messages',
  }
};

