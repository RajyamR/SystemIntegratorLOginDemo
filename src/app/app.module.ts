import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpentextComponentComponent } from './opentext-component/opentext-component.component';
import { GraphanaComponentComponent } from './graphana-component/graphana-component.component';
import { PlatformmetricsComponentComponent } from './platformmetrics-component/platformmetrics-component.component';
import { UiapiComponentComponent } from './uiapi-component/uiapi-component.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule, Router } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,LoginComponent, RootComponent, OpentextComponentComponent, GraphanaComponentComponent, PlatformmetricsComponentComponent, UiapiComponentComponent, HomeComponent, CallbackComponent, ProtectedComponent

  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    OktaAuthModule
  ],
  providers: [
    
    { 
      provide: OKTA_CONFIG, 
      useFactory: () => {
        const oktaAuth = new OktaAuth(environment.oidc);
        return {
          oktaAuth,
          onAuthRequired: (oktaAuth: OktaAuth, injector: Injector) => {
            const router = injector.get(Router);
            // Redirect the user to your custom login page
            router.navigate(['/login']);
          }  
        }
      }
    },
    

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }