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
    getHosptals: 'api/hospitals',
    getCids: 'api/cid',
    getMedicalProcedure: 'api/medical-procedures',
    getDrugs: 'api/drugs',
    generateHash: 'api/create-hash',
    readHash: 'api/read-hash'
  },
  googleApis: {
    key: 'AIzaSyBRuDbRuGoy6vxVAYSPCRqTcKxnlTbZwVs',
    api: 'https://maps.googleapis.com/maps/',
    getAddrress: 'api/geocode/json',
    getPlacesAutocomplete: 'api/place/autocomplete/json'
  }
};

