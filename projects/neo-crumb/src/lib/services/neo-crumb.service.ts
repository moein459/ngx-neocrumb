import {Injectable} from '@angular/core';
import {RouteLink} from '../models/neo-crumb.models';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NeoCrumbService {
	change$ = new BehaviorSubject<RouteLink[]>([]);

	constructor() {
	}
}
