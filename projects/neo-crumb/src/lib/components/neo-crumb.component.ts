import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, UrlSegment} from '@angular/router';
import {RouteLink} from '../models/neo-crumb.models';
import {Subscription} from 'rxjs/internal/Subscription';
import {NeoCrumbService} from '../services/neo-crumb.service';
import {filter} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Component({
	selector: 'nc-neo-crumb',
	templateUrl: './neo-crumb.component.html',
	styles: []
})
export class NeoCrumbComponent implements OnInit, OnDestroy {
	@Input()
	inlineBlock: boolean;

	routeLinks: RouteLink[] = [];
	subscriptions = new Subscription();

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private neoCrumbService: NeoCrumbService) {
	}

	ngOnInit(): void {
		this.routeLinks = this.createBreadcrumbs(this.activatedRoute.root);

		const postProcessSubscription = this.neoCrumbService.onPostProcess
			.subscribe(value => this.routeLinks = value);

		const routerEventsSubscription = this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => this.routeLinks = this.createBreadcrumbs(this.activatedRoute.root));


		this.subscriptions.add(routerEventsSubscription);
		this.subscriptions.add(postProcessSubscription);
	}

	private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: RouteLink[] = []): RouteLink[] {
		const children: ActivatedRoute[] = route.children;

		if (children.length === 0) {
			this.neoCrumbService.change(breadcrumbs);
			return breadcrumbs;
		}

		for (const child of children) {
			const routeURL = this.getRouteUrl(child.snapshot.url);
			const breadcrumb = child.snapshot.data['breadcrumb'];

			if (routeURL !== '') {
				url += `/${routeURL}`;
			}

			if (!isNullOrUndefined(breadcrumb) && !(routeURL === '' && child.children.length < 1))
				breadcrumbs.push({text: breadcrumb.text, link: url, iconClass: breadcrumb.iconClass, hide: breadcrumb.hide});


			return this.createBreadcrumbs(child, url, breadcrumbs);
		}
	}

	getRouteUrl(segment: UrlSegment[]): string {
		return segment.map(seg => seg.path).join('/');
	}

	isActive(index: number): boolean {
		return index == this.routeLinks.length - 1;
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
