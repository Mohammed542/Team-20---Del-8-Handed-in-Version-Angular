import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInspectionsComponent } from './report-inspections.component';

describe('ReportInspectionsComponent', () => {
  let component: ReportInspectionsComponent;
  let fixture: ComponentFixture<ReportInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportInspectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
