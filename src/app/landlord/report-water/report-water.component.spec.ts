import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWaterComponent } from './report-water.component';

describe('ReportWaterComponent', () => {
  let component: ReportWaterComponent;
  let fixture: ComponentFixture<ReportWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
