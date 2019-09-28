import {ModuleWithProviders, NgModule} from '@angular/core';
import {NeoCrumbComponent} from './components/neo-crumb.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
	declarations: [NeoCrumbComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([]),
	],
	exports: [NeoCrumbComponent]
})
export class NeoCrumbModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NeoCrumbModule,
		};
	}

	static forChild(): ModuleWithProviders {
		return {
			ngModule: NeoCrumbModule
		};
	}
}
