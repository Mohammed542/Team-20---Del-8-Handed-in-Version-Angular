import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsfulcapturepaymentComponent } from './sucsfulcapturepayment.component';

describe('SucsfulcapturepaymentComponent', () => {
  let component: SucsfulcapturepaymentComponent;
  let fixture: ComponentFixture<SucsfulcapturepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsfulcapturepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsfulcapturepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
