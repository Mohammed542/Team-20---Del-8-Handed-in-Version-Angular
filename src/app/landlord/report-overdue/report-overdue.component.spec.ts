import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOverdueComponent } from './report-overdue.component';

describe('ReportOverdueComponent', () => {
  let component: ReportOverdueComponent;
  let fixture: ComponentFixture<ReportOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOverdueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
