import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CakeDashboardComponent } from './shared/component/cake-dashboard/cake-dashboard.component';

import { CakeFilterPipe } from './shared/pipes/cake-filter.pipe';
import { NavBarShowHideDirective } from './shared/directives/nav-bar-show-hide.directive';


@NgModule({
  declarations: [
    AppComponent,
    CakeDashboardComponent,
    CakeFilterPipe,
    NavBarShowHideDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
