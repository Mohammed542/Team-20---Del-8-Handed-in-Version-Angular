import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtpaymentsComponent } from './viewtpayments.component';

describe('ViewtpaymentsComponent', () => {
  let component: ViewtpaymentsComponent;
  let fixture: ComponentFixture<ViewtpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtpaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
