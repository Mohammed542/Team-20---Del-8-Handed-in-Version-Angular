import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRentalAgreementStatusComponent } from './save-rental-agreement-status.component';

describe('SaveRentalAgreementStatusComponent', () => {
  let component: SaveRentalAgreementStatusComponent;
  let fixture: ComponentFixture<SaveRentalAgreementStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRentalAgreementStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRentalAgreementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
