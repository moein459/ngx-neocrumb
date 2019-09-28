import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoCrumbComponent } from './neo-crumb.component';

describe('NeoCrumbComponent', () => {
  let component: NeoCrumbComponent;
  let fixture: ComponentFixture<NeoCrumbComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ NeoCrumbComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(NeoCrumbComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
