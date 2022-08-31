
export const environment = {
  production: false,
  api:'https://apiv2.devotee.com.br/',
  urlImages: 'https://devote-v2.s3.sa-east-1.amazonaws.com/',
  socketUrL:'https://apiv2.devotee.com.br:6001/',
  webSocket: {
    url: 'apiv2.devotee.com.br',
    port: 6001,
    cluster: 'devows',
    events: {
      loginQrCode: 'login-qrcode',
      chat: 'new-message',
      matches: 'new-match',
      userUpdate: 'update'
    },
    channels: {
      loginQrCode: 'login.',
      chat: 'match.',
      matches: 'matches.',
      userUpdate: 'user.'

    }
  },
  urls: {
    login: 'api/login',
    loginGoogle: 'login/google',
    registerUser: 'api/users',
    updateUser: 'api/users/update',
    listCards: 'api/cards',
    userProfile: 'api/users',
    getMatches: 'api/matches',
    getChat: 'api/match/messages',
    getHosptals: 'api/hospitals',
    getCids: 'api/cid',
    getMedicalProcedure: 'api/medical-procedures',
    getMedicines: 'api/drugs',
    generateHash: 'api/create-hash',
    readHash: 'api/read-hash',
    profilePictures: 'api/user/pictures',
    likes: 'api/likes',
    getSugestionMatchs: 'api/cards',
    updateProfilePictureByOrder: 'api/user/pictures/update-by-order',
    termsOfUsePt: 'api/settings/terms',
    termsOfUseEn: 'api/settings/terms_en',
    privacyPolicyPt: 'api/settings/privacy',
    privacyPolicyEn: 'api/settings/privacy_en'

  },
  googleApis: {
    key: 'AIzaSyCYUz4sGa9i9jwNwomxPywGVN13kMN4q3c',
    api: 'https://maps.googleapis.com/maps/',
    getAddrress: 'api/geocode/json',
    getPlacesAutocomplete: 'api/place/autocomplete/json'
  }
};

