import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChildAComponent } from './dashboard-child-a.component';

describe('DashboardChildAComponent', () => {
  let component: DashboardChildAComponent;
  let fixture: ComponentFixture<DashboardChildAComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ DashboardChildAComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(DashboardChildAComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
