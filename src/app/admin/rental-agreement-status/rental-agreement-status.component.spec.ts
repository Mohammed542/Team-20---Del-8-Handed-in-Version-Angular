import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgreementStatusComponent } from './rental-agreement-status.component';

describe('RentalAgreementStatusComponent', () => {
  let component: RentalAgreementStatusComponent;
  let fixture: ComponentFixture<RentalAgreementStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAgreementStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalAgreementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
