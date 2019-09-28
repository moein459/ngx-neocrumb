import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NeoCrumbService} from 'ngx-neocrumb';

@Component({
	selector: 'nc-demo-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	subscription = new Subscription();

	constructor(private neoCrumbService: NeoCrumbService) {
	}

	ngOnInit(): void {
		this.subscription = this.neoCrumbService.change$.subscribe(value => {
			value.forEach(nc => nc.breadcrumb += ' test');
		});

		// this.neoCrumbService.postProcess([]);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
