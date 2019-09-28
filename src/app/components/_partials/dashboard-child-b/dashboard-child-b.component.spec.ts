import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChildBComponent } from './dashboard-child-b.component';

describe('DashboardChildBComponent', () => {
  let component: DashboardChildBComponent;
  let fixture: ComponentFixture<DashboardChildBComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ DashboardChildBComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(DashboardChildBComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
