import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmaintenanceComponent } from './assignmaintenance.component';

describe('AssignmaintenanceComponent', () => {
  let component: AssignmaintenanceComponent;
  let fixture: ComponentFixture<AssignmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
