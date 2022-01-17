
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';

import { OktaAuth } from '@okta/okta-auth-js';



@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SystemIntegratorLoginUI';
  isAuthenticated: boolean = false;

  constructor(public authStateService: OktaAuthStateService, private oktaAuth: OktaAuth) {

  }

  async logout() {
    await this.oktaAuth.signOut();
  }

  
}
