import {Injectable} from '@angular/core';
import {RouteLink} from '../models/neo-crumb.models';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable, Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NeoCrumbService {
	private change$ = new BehaviorSubject<RouteLink[]>([]);
	private postProcess$ = new Subject<RouteLink[]>();

	constructor() {
	}

	postProcess(data: RouteLink[]) {
		this.postProcess$.next(data);
	}

	change(data: RouteLink[]) {
		this.change$.next(data);
	}

	get onPostProcess() {
		return new Observable<RouteLink[]>(fn => this.postProcess$.subscribe(fn));
	}

	get onChange() {
		return new Observable<RouteLink[]>(fn => this.change$.subscribe(fn));
	}
}
