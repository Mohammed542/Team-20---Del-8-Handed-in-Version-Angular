import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgreementTypeComponent } from './rental-agreement-type.component';

describe('RentalAgreementTypeComponent', () => {
  let component: RentalAgreementTypeComponent;
  let fixture: ComponentFixture<RentalAgreementTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalAgreementTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalAgreementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
