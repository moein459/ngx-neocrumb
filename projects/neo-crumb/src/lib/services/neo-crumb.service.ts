import {Injectable} from '@angular/core';
import {RouteLink} from '../models/route-link.model';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NeoCrumbService {
	change$ = new BehaviorSubject<RouteLink[]>([]);
	postProcess$ = new Subject<RouteLink[]>();

	constructor() {
	}

	postProcess(data: RouteLink[]) {
		this.postProcess$.next(data);
	}
}
