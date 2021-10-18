import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRentalAgreementComponent } from './upload-rental-agreement.component';

describe('UploadRentalAgreementComponent', () => {
  let component: UploadRentalAgreementComponent;
  let fixture: ComponentFixture<UploadRentalAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRentalAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRentalAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
