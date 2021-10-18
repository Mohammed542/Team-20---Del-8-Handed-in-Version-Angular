import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfaultComponent } from './reportfault.component';

describe('ReportfaultComponent', () => {
  let component: ReportfaultComponent;
  let fixture: ComponentFixture<ReportfaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportfaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportfaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
