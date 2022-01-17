import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() hamburger = new EventEmitter();

  isNotificationClicked: boolean = false;

  // readonly CacheKeyConstants = CacheKeyConstants;
  
  notificationIconClicked(): void {
    this.isNotificationClicked = this.isNotificationClicked ? false : true;
    // this.notificationsService.showNotification(this.isNotificationClicked);
  }

  resetNotification() {
    this.isNotificationClicked = false;
  }

  userPreferences() {
    this.router.navigate(['/user-profile']);
  }

  hamburgerMenu(): void {
    this.hamburger.emit();
  }

  constructor(private router: Router, public authStateService: OktaAuthStateService, private oktaAuth: OktaAuth) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async logout() {
    await this.oktaAuth.signOut();
  }
}
