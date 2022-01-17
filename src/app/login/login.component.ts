import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OktaAuth, Tokens } from '@okta/okta-auth-js';
import { environment } from 'src/environments/environment';

// import { CacheManager } from '@shared/cache/cache-manager';
// import { CacheKeyConstants } from '@shared/constants';

// import { LoginCommand } from '../commands';

// import { SecurityService } from '../services';

// @ts-ignore
import * as OktaSignIn from '@okta/okta-signin-widget';

const DEFAULT_ORIGINAL_URI = environment.oidc.redirectUri;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signIn: any;
  constructor(public oktaAuth: OktaAuth) {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
//      baseUrl: environment.oidc.issuer.split('/oauth2')[0],
baseUrl: environment.oidc.issuer,
      clientId: environment.oidc.clientId,
      redirectUri: environment.oidc.redirectUri,
      logo: 'assets/images/Gainwell_Logo.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Welcome to Modular Intelligent integration Platform',
        },
      },
      authClient: oktaAuth,
    //  useInteractionCodeFlow:true
     
    });
  }

  ngOnInit() {
    // When navigating to a protected route, the route path will be saved as the `originalUri`
    // If no `originalUri` has been saved, then redirect back to the app root
    const originalUri = this.oktaAuth.getOriginalUri();
    if (!originalUri || originalUri === DEFAULT_ORIGINAL_URI) {
      this.oktaAuth.setOriginalUri('/');
    }
    
    this.signIn.showSignInToGetTokens({
      el: '#sign-in-widget',
      scopes: environment.oidc.scopes
    }).then((tokens: Tokens) => {
      // Remove the widget
      this.signIn.remove();

      // In this flow the redirect to Okta occurs in a hidden iframe
      this.oktaAuth.handleLoginRedirect(tokens);
    }).catch((err: any) => {
      // Typically due to misconfiguration
      throw err;
    });
  }

  ngOnDestroy() {
    this.signIn.remove();
  }
}

