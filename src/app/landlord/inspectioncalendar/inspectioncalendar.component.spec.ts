import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectioncalendarComponent } from './inspectioncalendar.component';

describe('InspectioncalendarComponent', () => {
  let component: InspectioncalendarComponent;
  let fixture: ComponentFixture<InspectioncalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectioncalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectioncalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
