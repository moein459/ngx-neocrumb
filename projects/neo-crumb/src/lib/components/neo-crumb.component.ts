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
	subscription = new Subscription();

	constructor(private router: Router, private neoCrumbService: NeoCrumbService) {
		this.neoCrumbService.postProcess$.subscribe(value => this.routeLinks = value);
		this.subscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.routeLinks = [];
			}

			if (event instanceof ActivationEnd) {
				this.addBreadcrumb(event.snapshot);
			}

			if (event instanceof NavigationEnd) {
				this.neoCrumbService.change$.next(this.routeLinks);
			}
		});
	}

	addBreadcrumb(route: ActivatedRouteSnapshot): void {
		const breadcrumb = route.data.breadcrumb;
		const link = route.pathFromRoot.map(o => o.url[0]).join('/');

		if (breadcrumb)
			this.routeLinks.splice(0, 0, {breadcrumb, link, isActive: this.isActive(link)});
	}

	isActive(url: string): boolean {
		return this.router.url == url;
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
