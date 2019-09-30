import {Component, Input, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, ActivationEnd, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {RouteLink} from '../models/neo-crumb.models';
import {Subscription} from 'rxjs/internal/Subscription';
import {NeoCrumbService} from '../services/neo-crumb.service';

@Component({
	selector: 'nc-neo-crumb',
	templateUrl: './neo-crumb.component.html',
	styles: []
})
export class NeoCrumbComponent implements OnDestroy {
	@Input()
	inlineBlock: boolean;

	routeLinks: RouteLink[] = [];
	subscriptions = new Subscription();

	constructor(private router: Router, private neoCrumbService: NeoCrumbService) {
		const postProcessSubscription = this.neoCrumbService.onPostProcess.subscribe(value => this.routeLinks = value);
		const routerEventsSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.routeLinks = [];
			}

			if (event instanceof ActivationEnd) {
				this.addBreadcrumb(event.snapshot);
			}

			if (event instanceof NavigationEnd) {
				this.neoCrumbService.change(this.routeLinks);
			}
		});

		this.subscriptions.add(postProcessSubscription);
		this.subscriptions.add(routerEventsSubscription);
	}

	addBreadcrumb(route: ActivatedRouteSnapshot): void {
		const breadcrumb = route.data.breadcrumb as RouteLink;
		breadcrumb.link = route.pathFromRoot.map(o => o.url[0]).join('/');

		if (breadcrumb) {
			this.routeLinks.splice(0, 0, breadcrumb);
		}
	}

	isActive(url: string): boolean {
		return this.router.url == url;
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
