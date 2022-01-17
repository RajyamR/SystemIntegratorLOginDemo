import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { RootComponent } from './root/root.component';

import { LoginComponent } from './login/login.component';
import { GraphanaComponentComponent } from './graphana-component/graphana-component.component';
import { OpentextComponentComponent } from './opentext-component/opentext-component.component';
import { PlatformmetricsComponentComponent } from './platformmetrics-component/platformmetrics-component.component';
import { UiapiComponentComponent } from './uiapi-component/uiapi-component.component';
import { HomeComponent } from './home/home.component';
import { OktaAuthGuard, OktaAuthStateService } from '@okta/okta-angular';
import { CallbackComponent } from './callback/callback.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  
  {
    path: 'si',
    component: RootComponent,
    canActivate: [ OktaAuthGuard ],
   

    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
       {
        path: 'graphana-page',
        component: GraphanaComponentComponent,
      },
      {
        path: 'opentext-page',
        component: OpentextComponentComponent,
      },
      {
        path: 'metrics-page',
        component: PlatformmetricsComponentComponent,
      },
      {
        path: 'uiapi-page',
        component: UiapiComponentComponent,

      }
    
      
    ]
  },
   {
    path: 'login',
   component: LoginComponent,
   
   },
   {
    path: '',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
   
   },

  {
    path: 'callback',
    component: CallbackComponent,
    canActivate: [ OktaAuthGuard ],
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
