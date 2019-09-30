import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NeoCrumbService} from '../../../../projects/neo-crumb/src/lib/services/neo-crumb.service';

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
		this.subscription = this.neoCrumbService.onChange.subscribe(value => {
			value.forEach(nc => {
				if (nc.text == 'Dash')
					nc.text = 'Dashboard';
			});
		});

		// this.neoCrumbService.postProcess([]);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
