import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRentalAgreementTypeComponent } from './save-rental-agreement-type.component';

describe('SaveRentalAgreementTypeComponent', () => {
  let component: SaveRentalAgreementTypeComponent;
  let fixture: ComponentFixture<SaveRentalAgreementTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRentalAgreementTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRentalAgreementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
