import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardChildAComponent} from './components/_partials/dashboard-child-a/dashboard-child-a.component';
import {DashboardChildBComponent} from './components/_partials/dashboard-child-b/dashboard-child-b.component';
import { DashboardChildEmptyComponent } from './components/_partials/dashboard-child-empty/dashboard-child-empty.component';
import {NeoCrumbModule} from 'ngx-neocrumb';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		DashboardChildAComponent,
		DashboardChildBComponent,
		DashboardChildEmptyComponent
	],
	imports: [
		BrowserModule,
	  	NeoCrumbModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
