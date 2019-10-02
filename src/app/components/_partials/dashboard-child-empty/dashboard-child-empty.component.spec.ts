import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChildEmptyComponent } from './dashboard-child-empty.component';

describe('DashboardChildEmptyComponent', () => {
  let component: DashboardChildEmptyComponent;
  let fixture: ComponentFixture<DashboardChildEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChildEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChildEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
