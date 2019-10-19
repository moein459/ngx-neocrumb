import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardChildAComponent} from './components/_partials/dashboard-child-a/dashboard-child-a.component';
import {DashboardChildBComponent} from './components/_partials/dashboard-child-b/dashboard-child-b.component';
import {DashboardChildEmptyComponent} from './components/_partials/dashboard-child-empty/dashboard-child-empty.component';


const routes: Routes = [
	{
		path: '', component: DashboardComponent, data: {
			breadcrumb:
				{
					text: 'Dash',
					iconClass: 'mdi mdi-view-dashboard'
				}
		}
		, children: [
			{path: '', component: DashboardChildEmptyComponent},
			{path: 'child-a', component: DashboardChildAComponent, data: {breadcrumb: {text: 'Child A', iconClass: 'mdi mdi-account'}}},
			{path: 'child-b', component: DashboardChildBComponent, data: {breadcrumb: {text: 'Child B', hide: true}}},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
