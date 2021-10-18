import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsEditLandlordComponent } from './sucs-edit-landlord.component';

describe('SucsEditLandlordComponent', () => {
  let component: SucsEditLandlordComponent;
  let fixture: ComponentFixture<SucsEditLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucsEditLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucsEditLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
