import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardChildAComponent } from './components/_partials/dashboard-child-a/dashboard-child-a.component';
import { DashboardChildBComponent } from './components/_partials/dashboard-child-b/dashboard-child-b.component';

@NgModule({
  declarations: [
	AppComponent,
	DashboardComponent,
	DashboardChildAComponent,
	DashboardChildBComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
