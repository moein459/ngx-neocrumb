import {ModuleWithProviders, NgModule} from '@angular/core';
import {NeoCrumbComponent} from './neo-crumb.component';
import {RouterModule} from '@angular/router';


@NgModule({
	declarations: [NeoCrumbComponent],
	imports: [RouterModule.forChild([])],
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
