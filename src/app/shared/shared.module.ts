
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';

// import { FooterComponent } from './footer/footer.component';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
 import { HeaderComponent } from './header/header.component';
// import { NotificationsComponent} from './header/notifications/notifications.component';
 import { NavigationComponent } from './navigation/navigation.component';
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
// import { CacheManager } from './cache/cache-manager';
// import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
// import { RootPageNotFoundComponent } from './page-not-found/root/root-page-not-found.component';

// import * as pipes from './pipes';

// import { HeaderService } from './header/header.service';
// import { FormatCurrencyPipe } from './pipes/format-currency.pipe';
// import { NAPipe } from './pipes/na.pipe';


@NgModule({
  declarations: [
    // FooterComponent,
    // BreadcrumbComponent,
     HeaderComponent,
    // NotificationsComponent,
     NavigationComponent,
    // UnauthorizedComponent,
    // PageNotFoundComponent,
    // LoadingSpinnerComponent,
    // WorkInProgressComponent,
    // pipes.FormatAmountPipe,
    // pipes.SafePipe,
    // FormatCurrencyPipe,
    // NAPipe,
    // RootPageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    RouterModule,
    ChartsModule,
     NgMaterialMultilevelMenuModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 8000,
    }),
  ],
  exports: [
    // BreadcrumbComponent,
     HeaderComponent,
    // FooterComponent,
   //  NotificationsComponent,
    FormsModule,
     NavigationComponent,
    // LoadingSpinnerComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    // pipes.FormatAmountPipe,
    // pipes.SafePipe,
    // FormatCurrencyPipe,
    // NAPipe,
    ChartsModule,
    NgMaterialMultilevelMenuModule,
    MatTooltipModule,
    // WorkInProgressComponent,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule,
  ],
  providers: [
    // CacheManager,
    // pipes.FormatAmountPipe,
    // pipes.SafePipe,
   // HeaderService,
     MultilevelMenuService
  ]
})
export class SharedModule { }
