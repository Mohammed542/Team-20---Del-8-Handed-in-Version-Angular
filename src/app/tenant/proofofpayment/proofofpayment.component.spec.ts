import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofofpaymentComponent } from './proofofpayment.component';

describe('ProofofpaymentComponent', () => {
  let component: ProofofpaymentComponent;
  let fixture: ComponentFixture<ProofofpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofofpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofofpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
