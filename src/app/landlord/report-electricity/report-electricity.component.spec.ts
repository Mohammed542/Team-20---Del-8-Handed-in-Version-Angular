import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportElectricityComponent } from './report-electricity.component';

describe('ReportElectricityComponent', () => {
  let component: ReportElectricityComponent;
  let fixture: ComponentFixture<ReportElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportElectricityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
