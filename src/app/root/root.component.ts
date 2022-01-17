import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  userName: string | undefined;

  isHamburgerEnabled: boolean = false;
  isNavClosedClicked: boolean = false;
  isMouseEnteredClicked: boolean = false;
  
  menuSlide(): void {
    this.isHamburgerEnabled = !this.isHamburgerEnabled ? true : false;
  }
  
  navSlide() {
      this.isNavClosedClicked = !this.isNavClosedClicked ? true : false;
  }

  mouseSlide() {
    this.isMouseEnteredClicked = !this.isMouseEnteredClicked ? true : false;
  }

  constructor(private router: Router) { 

  }
   ngOnInit() {
    // returns an object with user's claims

    //const userClaims = this.oktaAuth.getUser();
//console.log(userClaims)
//const accessToken = this.oktaAuth.getAccessToken();
//console.log(accessToken)

    // user name is exposed directly as property

   // this.userName = userClaims.name;
    console.log(this.userName);
    this.router.navigate(['/si/home'])
  }}
