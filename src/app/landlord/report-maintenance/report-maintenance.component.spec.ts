import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMaintenanceComponent } from './report-maintenance.component';

describe('ReportMaintenanceComponent', () => {
  let component: ReportMaintenanceComponent;
  let fixture: ComponentFixture<ReportMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
