// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  oidc: {
  //  issuer: 'https://dev-88797053.okta.com/oauth2/default',
  issuer: 'https://dev-88797053.okta.com/', 
// redirectUri: 'http://localhost:4200/si/home',
 // redirectUri: 'http://systemintegratordockerloginui-demo.apps.sidemo.gwtsidemo.com/callback', // old one 
  redirectUri: 'http://systemintegratordockerloginui-demo.apps.codemo.gwtsidemo.com/si/home',     
  clientId: '0oa2zu29wekQAnsWd5d7',
    scopes: ['openid', 'profile', 'email'],
    //pkce: false,
    logo: 'C://Users/t172802/Documents/System Intigrator ProjectSystemIntegrator UI LoginPage/SystemIntegratorLoginUI/src/assets/images/login_bg.png',
    authParams: {
      pkce: false,

    //  responseType: 'code'
    }
  },
  
 
};