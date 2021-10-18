import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcapturepaymentComponent } from './confcapturepayment.component';

describe('ConfcapturepaymentComponent', () => {
  let component: ConfcapturepaymentComponent;
  let fixture: ComponentFixture<ConfcapturepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfcapturepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcapturepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
