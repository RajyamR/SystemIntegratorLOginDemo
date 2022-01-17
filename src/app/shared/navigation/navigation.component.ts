import { Component, EventEmitter,  Output,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Configuration, ExpandedRTL, ExpandedLTR, SlideInOut } from 'ng-material-multilevel-menu';

 @Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [SlideInOut, ExpandedRTL, ExpandedLTR]
})
export class NavigationComponent {
  @Output() menutoggle = new EventEmitter();
  @Output() mousetoggle = new EventEmitter();

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  
  isMenuClosed = false;
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;  
  showSubSubMenu: boolean = false;
  
  isLoading: boolean = false;
  error: any;
  reports: any;
  name = 'Angular';
  appitems:any[] = [];
  appitemsOriginal:any[] = [
    {
      label: 'Home',
      link: 'si/home',
      faIcon: 'bi bi-house-door',
      class: 'level-1',
      hide: true,
      tooltip: 'Home',
     },
    {
      label: 'SI Data metrics Graphana url',
      link: 'si/graphana-page',
      customIcon: '../../../assets/images/icons/platform-metrics.png',
      class: 'level-1',
      hide: true,
      tooltip: 'SI Data metrics Graphana url',
     },
     {
      label: 'Platform metrics openshift metrics url',
      link: 'si/opentext-page',
      faIcon: 'bi bi-bar-chart',
      class: 'level-1',
      hide: true,
      tooltip: 'Platform metrics openshift metrics url',
     },

    ];
  
  config: Configuration = {
    paddingAtStart: false,
    interfaceWithRoute: true,
    classname: 'app-sidemenu',
    fontColor: `#2B3A44`,
    backgroundColor: `#ffffff`,
    selectedListFontColor: `#1931E3`,
    useDividers: false,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
    customTemplate: true
  };

  mouseenter() {
    if (this.isMenuClosed) {
      this.isShowing = true;
      this.mousetoggle.emit();
    }
  }

  mouseleave() {
    if (this.isMenuClosed) {
      this.isShowing = false;
      this.mousetoggle.emit();
    }
  }

  closeNavmenu() {
    this.isMenuClosed = this.isMenuClosed ? false : true;
    this.menutoggle.emit();
  }

  getClass(item: any) {
      return {
          [item.faIcon]: true
      }
  }
  
  constructor() {}

  ngOnInit() { 
    //this.getReports();
    this.appitems = this.appitemsOriginal;
  }
  
  
 }
