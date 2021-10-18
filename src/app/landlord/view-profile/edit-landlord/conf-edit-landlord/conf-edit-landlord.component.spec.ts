import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfEditLandlordComponent } from './conf-edit-landlord.component';

describe('ConfEditLandlordComponent', () => {
  let component: ConfEditLandlordComponent;
  let fixture: ComponentFixture<ConfEditLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfEditLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfEditLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
