import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInspectionComponent } from './report-inspection.component';

describe('ReportInspectionComponent', () => {
  let component: ReportInspectionComponent;
  let fixture: ComponentFixture<ReportInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
